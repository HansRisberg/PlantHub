using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;

namespace PlantHub01.Models
{
    public class Plant
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        [Required]
        public string Name { get; set; } = string.Empty;
        public string About { get; set; } = string.Empty;
        [Required]
        public string? PlantFamily { get; set; }
        [Required]
        public string PlantName { get; set; } = string.Empty;
        public string MotherPlant { get; set; } = string.Empty;
        public string Image {get; set; } = string.Empty;
        public DateTime? Added { get; set; } = DateTime.Now;
        public bool Available { get; set; } = false;
        public string ImagePath { get; set; } = string.Empty;
        public int Price { get; set; } = 0;

        // Navigation properties
        public User? User { get; set; }
        public ICollection<Conversation>? Conversations { get; set; }

    }
}
