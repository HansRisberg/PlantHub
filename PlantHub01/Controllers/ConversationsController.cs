using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UserContext.Data;

namespace PlantHub01.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConversationsController : ControllerBase
    {

        private readonly PlantHub01Context _context;

        public ConversationsController(PlantHub01Context context)
        {
            _context = context;
        }

        // TODO: Create coversation web api methods
    }
}
