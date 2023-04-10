using System.ComponentModel.DataAnnotations.Schema;

namespace PlantHub01.Models
{
    public class Conversation
    {
        public int Id { get; set; }
        //PlantId includes its owner into the conversation
        [ForeignKey("Plant")]
        public int PlantId { get; set; }
        public virtual Plant Plant { get; set; }
        //UserId of the person sending the request
        [ForeignKey("User")]
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public string Title { get; set; } = string.Empty;
        public ICollection<Message>? Messages { get; set; }
    }
}
