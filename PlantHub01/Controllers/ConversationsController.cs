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

        // GET: api/Conversations/5
        // Get all conversations user has sent including data for plant conversation is about
        [HttpGet("{UserID}")]
        public async Task<ActionResult<IEnumerable<Conversation>>> GetConversationsUser(int userId)
        {
            if (_context.Conversation == null)
            {
                return NotFound();
            }

            List<Conversation> conversations = await _context.Conversation
                .Include(c => c.Plant)
                .Where(c => c.SenderUserId == userId || c.Plant!.UserId == userId)
                .ToListAsync();

            // && c.PlantId == c.Plant!.Id

            if (conversations.Count == 0)
            {
                return NotFound();
            }

            return conversations;
        }

        // GET: api/Conversations/Messages/5
        // Get all conversations user has sent based on conversation id
        [HttpGet("Messages/{ConversationId}")]
        public async Task<ActionResult<IEnumerable<Message>>> GetMessages(int conversationId)
        {
            if (_context.Message == null)
            {
                return NotFound();
            }

            List<Message> messages = await _context.Message
                .Include(m => m.Conversation)
                .Where(m => m.ConversationId == conversationId)
                .ToListAsync();

            if (messages.Count == 0)
            {
                return NotFound();
            }

            return messages;
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
