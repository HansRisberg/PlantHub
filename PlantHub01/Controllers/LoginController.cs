using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlantHub01.Models;
using UserContext.Data;

namespace PlantHub01.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly PlantHub01Context _context;

        public LoginController(PlantHub01Context context)
        {
            _context = context;
        }

        // Login
        [HttpPost]
        public async Task<IActionResult> UserLogin([Bind("Username")] Login login)
        {
            User? userLogin = await _context.User.Where(u => u.Name.Equals(login.Username)).FirstOrDefaultAsync();
            
            if (userLogin == null)
            {
                return BadRequest();
            }

            return NoContent();
        }
    }
}
