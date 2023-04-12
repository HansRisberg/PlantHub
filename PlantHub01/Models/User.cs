using System.ComponentModel.DataAnnotations;

namespace PlantHub01.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; } = string.Empty;
        public string Bio { get; set; } = string.Empty;
        [Required]
        public string Email { get; set; } = string.Empty;
        [Required]
        public string? Location { get; set; }
        public string? Password { get; set; } = string.Empty;
        public ICollection<Conversation>? Conversations { get; set; }

        public ICollection<Plant> Plants { get; }



    }
}
