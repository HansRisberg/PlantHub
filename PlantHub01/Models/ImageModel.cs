namespace PlantHub01.Models
{
    public class ImageModel
    {
        public int UserId { get; set; }
        public string? Name { get; set; }
        public string? About { get; set; }
        public string? PlantFamily { get; set; }
        public string? PlantName { get; set; }
        public string? MotherPlant { get; set; }
        public IFormFile? Image { get; set; }
        public int Price { get; set; } = 0;
    }
}
