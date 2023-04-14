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
        //public string? Image { get; set; } = "https://www.commodore.no/wp-content/uploads/2022/08/Tomas_kontakt-764x764.jpg";
        public ICollection<Conversation>? Conversations { get; set; }

        public ICollection<Plant>? Plants { get; }

    }
}
