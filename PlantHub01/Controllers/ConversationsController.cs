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

        //[HttpPost]
        //public async Task<IActionResult> CreateConversation()
        //{
        //    // Call method for checking if conversation already exists

        //    // If conversation does not exist, add new conversation
        //} 

        //// Method for checking if conversation already exists
        //private void CheckIfConversationExists()
        //{
        //} 
    }
}
