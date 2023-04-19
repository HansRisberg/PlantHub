using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using PlantHub01.Models;
using UserContext.Data;

namespace PlantHub01.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlantsController : ControllerBase
    {
        private readonly PlantHub01Context _context;
        private readonly IWebHostEnvironment _environment;

        public PlantsController(PlantHub01Context context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;

        }

        // GET: api/Plants
        // This method should fetch all plants
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Plant>>> GetPlant()
        {
            if (_context.Plant == null)
            {
                return NotFound();
            }

            return await _context.Plant.ToListAsync();
        }

        // GET: api/Plants/5
        // Gets a specific plant using plant ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Plant>> GetPlant(int id)
        {
            if (_context.Plant == null)
            {
                return NotFound();
            }
            Plant? plant = await _context.Plant.FindAsync(id);

            if (plant == null)
            {
                return NotFound();
            }

            return plant;
        }

        // GET: api/Plants/UserId/5
        // Get all plants based on user id
        [HttpGet("UserId/{userId}")]
        public async Task<ActionResult<IEnumerable<Plant>>> GetPlantByUser(int userId)
        {
            if (_context.Plant == null)
            {
                return NotFound();
            }
            List<Plant> plants = await _context.Plant.Where(p => p.UserId == userId).ToListAsync();

            if (plants.Count == 0)
            {
                return NotFound();
            }

            return plants;
        }

        // PUT: api/Plants/5
        // Update available field on plant, toggles between true and false
        [HttpPut("Available/{id}")]
        public async Task<IActionResult> PutPlant(int id)
        {
            if (_context.Plant == null)
            {
                return BadRequest();
            }

            Plant? plant = await _context.Plant.Where(p => p.Id == id).FirstOrDefaultAsync();

            if(plant == null)
            {
                return NotFound();
            }

            plant.Available = !plant.Available;

            _context.Entry(plant).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlantExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(plant.Available);
        }

        // PUT: api/Plants/5
        // Update plant
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPlant(int id, Plant plant)
        {
            if (id != plant.Id)
            {
                return BadRequest();
            }

            _context.Entry(plant).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlantExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Plants
        // Method used for creating a new plant
        [HttpPost]
        public async Task<ActionResult<Plant>> PostPlant([FromForm] ImageModel plant)
        {
            var fileName = Path.GetFileName(plant.Image.FileName);
            var filePath = string.Concat(Path.GetFileNameWithoutExtension(fileName),
                //"_", 
                //Guid.NewGuid().ToString().AsSpan(0, 4),
                Path.GetExtension(fileName));
            var folderPath = Path.Combine(_environment.ContentRootPath, "ClientApp\\public\\images", plant.UserId.ToString());
            var path = Path.Combine(folderPath, filePath);

            var newPlant = new Plant{
                Name = plant.Name,
                UserId = plant.UserId,
                MotherPlant = plant.MotherPlant,
                PlantFamily = plant.PlantFamily,
                PlantName = plant.PlantName,
                About = plant.About,
                Price = plant.Price,
                ImagePath = path,
                Image = fileName
            };
            if (!Directory.Exists(folderPath)){
                Directory.CreateDirectory(folderPath);
            }
            
            await plant.Image.CopyToAsync(new FileStream(path, FileMode.Create));

            _context.Plant.Add(newPlant);
            await _context.SaveChangesAsync();
            //return Ok(newPlant);
           
            //return CreatedAtAction("GetUser", newPlant);
            return CreatedAtAction(nameof(GetPlant), new { id = newPlant.Id }, newPlant);
        }

        // POST: api/Plants/Duplicate
        // Method for when user has bought a new plant and want to add it to their plant collection
        [HttpPost("Duplicate")]
        public async Task<ActionResult<User>> PostUser([Bind("UserId,Name,About,PlantFamily,PlantName,MotherPlant,Image,Price")] Plant plant)
        {
            if (_context.Plant == null)
            {
                return Problem("Entity set 'PlantHub01Context.Plant'  is null.");
            }
            _context.Plant.Add(plant);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        // DELETE: api/Plants/5
        // Delete a plant in database based on id
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePlant(int id)
        {
            if (_context.Plant == null)
            {
                return NotFound();
            }
            Plant? plant = await _context.Plant.FindAsync(id);
            if (plant == null)
            {
                return NotFound();
            }

            _context.Plant.Remove(plant);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PlantExists(int id)
        {
            return (_context.Plant?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
