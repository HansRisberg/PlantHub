using System.ComponentModel.DataAnnotations.Schema;

namespace PlantHub01.Models
{
    public class Conversation
    {
        public int Id { get; set; }
        //PlantId includes its owner into the conversation
        public int PlantId { get; set; }
        //UserId of the person sending the request
        [ForeignKey ("User")]
        public int SenderUserId { get; set; }
        public string Title { get; set; } = string.Empty;
        public bool IsAccepted { get; set; } = false;
        // Navigation properties
        public User? SenderUser { get; set; }
        public Plant? Plant { get; set; }
        public ICollection<Message>? Messages { get; set; }
    }
}
