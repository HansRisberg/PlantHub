using System.ComponentModel.DataAnnotations.Schema;

namespace PlantHub01.Models
{
    public class Message
    {
        public int Id { get; set; }
        public int ConversationId { get; set; }
        public string? MessageText { get; set; }

        [ForeignKey("User")]
        public int SenderUserId { get; set; }

        // Navigation properites
        public Conversation? Conversation { get; set; }


    }
}
