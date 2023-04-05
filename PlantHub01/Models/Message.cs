namespace PlantHub01.Models
{
    public class Message
    {
        public int Id { get; set; }
        public int ConversationId { get; set; }
        public string? From { get; set; }
        public string? To { get; set; }
        public string? MessageText { get; set; } = string.Empty;

    }
}
