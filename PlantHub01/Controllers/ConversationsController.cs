using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserContext.Data;
using PlantHub01.Models;

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

        [HttpPost]
        public async Task<ActionResult<Conversation>> CreateConversation([Bind("PlantId,SenderUserID")] Conversation conversation)
        {

            // Call method for checking if conversation already exists
            bool conversationExists = CheckIfConversationExists(conversation.PlantId, conversation.SenderUserId);
            if ( conversationExists == true)
            {
                return NotFound();
            }

            _context.Conversation.Add(conversation);
            await _context.SaveChangesAsync();

            return Ok(conversation);

        }

        [HttpPost("Message")]
        public async Task<ActionResult> CreateMessage([Bind("ConversationId,MessageText")]Message message)
        {
            if (message == null)
            {
                return BadRequest();
            }

            _context.Message.Add(message);
            await _context.SaveChangesAsync();

            return Ok(message);
        }

        private bool CheckIfConversationExists(int plantId, int senderUserId)
        {
            return (_context.Conversation.Any(c => c.SenderUserId == senderUserId && c.PlantId == plantId));
        }
    }
}
