using Microsoft.EntityFrameworkCore;
using UserContext.Data;
using PlantHub01.Models;


namespace PlantHub01.Models
{

    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new PlantHub01Context(
                serviceProvider.GetRequiredService<
                    DbContextOptions<PlantHub01Context>>()))
            {
                // Look for any users
                if (context.User.Any())
                {
                    return;   // DB has been seeded
                }

                context.User.AddRange(
                    new User
                    {
                        Name = "William",
                        Bio = "Digger planter og pupper",
                        Location = "Frogner, Frogneralleen 18",

                    },

                    new User
                    {
                        Name = "Henrik",
                        Bio = "Keen på  dyrke marihuana med meg???",
                        Location = "Lillestrøm, Henrik Wergelands gate 10A"
                    },

                    new User
                    {
                        Name = "Adam",
                        Bio = "Need to get my palm tree watered on a weekly basis",
                        Location = "Skedsmokorset, Hattemakerlia 24",

                    },

                    new User
                    {
                        Name = "Jeppe",
                        Bio = "Bytter stiklinger mot vanning",
                        Location = "Skedsmokorset, Gjerdrumsveien 28"
                    },

                    new User
                    {
                        Name = "Bella",
                        Bio = "I'm an ESFJ, Libra, plantmommy and knitlover! I recently went through a break-up, and though it was sad I am now ready to mingle with all you other plant people and expand my collection.\r\n",
                        Location = "Oslo, Langkaia 1",

                    },

                    new User
                    {
                        Name = "Ayoub",
                        Bio = "IT consultant. New to the plant game. Looking for inspo and tips.",
                        Location = "Oslo, Slottsplassen 1",

                    }
                );
                context.SaveChanges();
            }

            using (var context = new PlantHub01Context(
            serviceProvider.GetRequiredService<
            DbContextOptions<PlantHub01Context>>()))
            {

                if (context.Plant.Any())
                {
                    return;   // DB has been seeded
                }

                context.Plant.AddRange(
                    new Plant
                    {
                        UserId = 1,
                        Name = "Alistar",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Lilliput Agave",
                        Image = "alistar.png",
                        Available = true

                    },

                    new Plant
                    {
                        UserId = 1,
                        Name = "Jhin",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Jubilee",
                        Image = "jhin.png",
                        Available = true

                    },
                    new Plant
                    {
                        UserId = 2,
                        Name = "Yumi",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Abidjan",
                        Price = 100,
                        Image = "yumi.png",
                        Available = true

                    },
                    new Plant
                    {
                        UserId = 1,
                        Name = "Zoe",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Maria Chirstina",
                        Image = "zoe.png",
                        Available = false

                    },
                    new Plant
                    {
                        UserId = 2,
                        Name = "Pyke",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Emerald Isle",
                        Image = "pyke.png",
                        Available = false

                    },
                    new Plant
                    {
                        UserId = 3,
                        Name = "Lux",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Mary Ann",
                        Price = 100,
                        Image = "lux.png",
                        Available = true

                    },


                    new Plant
                    {
                        UserId = 3,
                        Name = "Samira",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "BJ Freeman",
                        Image = "samira.png",
                        Available = false
                    },
                    new Plant
                    {
                        UserId = 4,
                        Name = "Ekko",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Marguerita",
                        Image = "ekko.png",
                        Available = false

                    },
                    new Plant
                    {
                        UserId = 3,
                        Name = "Nunu",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Emerald Star",
                        Image = "nunu.png",
                        Available = true

                    },

                    new Plant
                    {
                        UserId = 4,
                        Name = "Vi",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Bronze Anthurium",
                        Image = "vi.png",
                        Available = false

                    },
                    new Plant
                    {
                        UserId = 4,
                        Name = "Ashe",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Fish tail palm",
                        Price = 69,
                        Image = "ashe.png",
                        Available = true
                    },

                    new Plant
                    {
                        UserId = 4,
                        Name = "Jinx",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Dwarf tree fern",
                        Image = "jinx.png",
                        Available = true
                    },

                    new Plant
                    {
                        UserId = 3,
                        Name = "Seraphine",
                        About = "My lovely!!",
                        PlantFamily = "Araceae",
                        PlantName = "Parlor palm",
                        Image = "seraphine.png",
                        Available = true

                    },
                    new Plant
                    {
                        UserId = 2,
                        Name = "Garren",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Neanthebella palm",
                        Image = "garren.png",
                        Available = false

                    },
                    new Plant
                    {
                        UserId = 1,
                        Name = "Veigar",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Bella palm",
                        Price = 1,
                        Image = "veigar.png",
                        Available = true

                    },
                    new Plant
                    {
                        UserId = 5,
                        Name = "Alpakka",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "String of pearls",
                        Price = 0,
                        Image = "alpakka.jpg",
                        Available = true

                    },
                    new Plant
                    {
                        UserId = 5,
                        Name = "Sau",
                        About = "Got this from my ex. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Maidenhair fern",
                        Price = 0,
                        Image = "sau.jpg",
                        Available = true

                    },
                    new Plant
                    {
                        UserId = 5,
                        Name = "Cashmeere",
                        About = "Got this from my cat. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Wendy",
                        Price = 400,
                        Image = "cashmeere.jpg",
                        Available = true

                    },
                    new Plant
                    {
                        UserId = 5,
                        Name = "Bambus",
                        About = "Got this from my ant. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Sølvranke",
                        Price = 0,
                        Image = "bambus.jpg",
                        Available = true

                    },
                    new Plant
                    {
                        UserId = 5,
                        Name = "Cotton",
                        About = "Got this from my mum. Grows slow, but can share!",
                        PlantFamily = "Araceae",
                        PlantName = "Philodendron",
                        Price = 200,
                        Image = "cotton.jpg",
                        Available = true

                    },
                    new Plant
                    {
                        UserId = 5,
                        Name = "Mohair",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Monstera adansonii",
                        Price = 0,
                        Image = "mohair.jpg",
                        Available = true

                    },
                    new Plant
                    {
                        UserId = 5,
                        Name = "Merino",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Philodendron",
                        PlantName = "White Knight",
                        Price = 0,
                        Image = "merino.jpg",
                        Available = true

                    },
                    new Plant
                    {
                        UserId = 5,
                        Name = "Viking",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Lewisia cotyledon",
                        Price = 0,
                        Image = "viking.jpg",
                        Available = true

                    },
                    new Plant
                    {
                        UserId = 5,
                        Name = "Rauma",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Philodendron gloriosum",
                        Price = 100,
                        Image = "rauma.jpg",
                        Available = true

                    },
                    new Plant
                    {
                        UserId = 5,
                        Name = "Hekla",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Rhaphidophora Tetrasperma",
                        Price = 399,
                        Image = "hekla.jpg",
                        Available = true

                    },
                    new Plant
                    {
                        UserId = 5,
                        Name = "Nøste",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Gjøksyre",
                        Price = 0,
                        Image = "nøste.jpg",
                        Available = true

                    },
                    new Plant
                    {
                        UserId = 5,
                        Name = "Maske",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Crassula Perforata",
                        Price = 0,
                        Image = "maske.jpg",
                        Available = true

                    },
                    new Plant
                    {
                        UserId = 5,
                        Name = "Tråd",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Hoya Carnosa Tricolor",
                        Price = 900,
                        Image = "tråd.jpg",
                        Available = true

                    },
                    new Plant
                    {
                        UserId = 5,
                        Name = "Perle",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Aglaonema White Star",
                        Price = 300,
                        Image = "perle.jpg",
                        Available = true

                    },
                    new Plant
                    {
                        UserId = 6,
                        Name = "C#",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Bella palm",
                        Price = 0,
                        Image = "c#.jpg",
                        Available = true

                    }

                );
                context.SaveChanges();
            }
        }

    }
}
