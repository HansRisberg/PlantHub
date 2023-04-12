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
        
        // These two properties Fredrik will use for google maps later
        //public double Latitude { get; set; }
        //public double Longitude { get; set; }

        public int Price { get; set; } = 0;

        #region triedgooglelocation
        //{ "lat": 59.92595256142255, "lng": 10.760677493817639 }

        //Code i tried to use to find user location
        //public async Task<string> GetLocationNameAsync(double latitude, double longitude, string apiKey)
        //{
        //    string locationName = string.Empty;

        //    using (var httpClient = new HttpClient())
        //    {
        //        string requestUri = $"https://maps.googleapis.com/maps/api/geocode/json?latlng={latitude},{longitude}&key={apiKey}";
        //        HttpResponseMessage response = await httpClient.GetAsync(requestUri);

        //        if (response.IsSuccessStatusCode)
        //        {
        //            string json = await response.Content.ReadAsStringAsync();
        //            JObject jsonResponse = JObject.Parse(json);
        //            JArray results = (JArray)jsonResponse["results"];

        //            if (results.Count > 0)
        //            {
        //                locationName = (string)results[0]["formatted_address"];
        //            }
        //        }
        //    }

        //    return locationName;
        //}
        #endregion

    }
}
