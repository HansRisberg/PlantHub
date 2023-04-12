using System.ComponentModel.DataAnnotations.Schema;

namespace PlantHub01.Models
{
    public class Conversation
    {
        public int Id { get; set; }
        //PlantId includes its owner into the conversation
        public int PlantId { get; set; }
        //UserId of the person sending the request
        public int UserId { get; set; }
        public string Title { get; set; } = string.Empty;
        public ICollection<Message>? Messages { get; set; }
    }
}
