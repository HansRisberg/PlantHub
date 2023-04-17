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
                        Name = "Bella Delfi",
                        Bio = "Hiee, my name is Bella, and I'm an ESFJ, Libra, plantmommy and knitlover! I recently went through a break-up, and though it was sad I am now ready to mingle with all you other plant people and expand my collection.\r\n",
                        Location = "Oslo, Langkaia 1",

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
                        PlantName = "Monstera",
                        Image = "https://i.pinimg.com/originals/3e/a7/45/3ea74524751a43f2a06356bde34d2e5d.jpg",
                        Available = true

                    },

                    new Plant
                    {
                        UserId = 1,
                        Name = "Jhin",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Monstera",
                        Image = "https://i.pinimg.com/originals/3e/a7/45/3ea74524751a43f2a06356bde34d2e5d.jpg",
                        Available = true

                    },
                    new Plant
                    {
                        UserId = 2,
                        Name = "Yumi",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Monstera",
                        Price = 100,
                        Image = "https://i.pinimg.com/originals/3e/a7/45/3ea74524751a43f2a06356bde34d2e5d.jpg",
                        Available = true

                    },
                    new Plant
                    {
                        UserId = 1,
                        Name = "Zoe",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Gullranke",
                        Image = "https://assets.amoi.dev/images/74605585-4470-454d-a837-1ec7b7e74e0a.jpeg?top=0&bottom=31&left=0&right=31&fit=scale-down&width=1536",
                        Available = false

                    },
                    new Plant
                    {
                        UserId = 2,
                        Name = "Pyke",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Gullranke",
                        Image = "https://tise-static.telenorcdn.net/5f26f426af9bb3003190f1ba/image0/e3a38da1-8569-4bb2-b3e8-9d6091734f28/gullranke",
                        Available = false

                    },
                    new Plant
                    {
                        UserId = 3,
                        Name = "Lux",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Gullranke",
                        Price = 100,
                        Image = "https://tise-static.telenorcdn.net/5f26f426af9bb3003190f1ba/image0/e3a38da1-8569-4bb2-b3e8-9d6091734f28/gullranke",
                        Available = true

                    },


                    new Plant
                    {
                        UserId = 3,
                        Name = "Samira",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Monstera",
                        Image = "https://i.pinimg.com/originals/55/da/38/55da384476ff2a5f4e93169f13b7e0f7.jpg",
                        Available = false
                    },
                    new Plant
                    {
                        UserId = 4,
                        Name = "Ekko",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Monstera",
                        Image = "https://i.pinimg.com/originals/55/da/38/55da384476ff2a5f4e93169f13b7e0f7.jpg",
                        Available = false

                    },
                    new Plant
                    {
                        UserId = 3,
                        Name = "Nunu",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Gullranke",
                        Image = "https://assets.amoi.dev/images/74605585-4470-454d-a837-1ec7b7e74e0a.jpeg?top=0&bottom=31&left=0&right=31&fit=scale-down&width=1536",
                        Available = true

                    },

                    new Plant
                    {
                        UserId = 4,
                        Name = "Vi",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Gullranke",
                        Image = "https://tise-static.telenorcdn.net/5f26f426af9bb3003190f1ba/image0/e3a38da1-8569-4bb2-b3e8-9d6091734f28/gullranke",
                        Available = false

                    },
                    new Plant
                    {
                        UserId = 4,
                        Name = "Ashe",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Gullranke",
                        Price = 69,
                        Image = "https://www.commodore.no/wp-content/uploads/2022/08/Tomas_kontakt-764x764.jpg",
                        Available = true
                    },

                    new Plant
                    {
                        UserId = 5,
                        Name = "Jinx",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Gullranke",
                        Image = "https://assets.amoi.dev/images/74605585-4470-454d-a837-1ec7b7e74e0a.jpeg?top=0&bottom=31&left=0&right=31&fit=scale-down&width=1536",
                        Available = true
                    },

                    new Plant
                    {
                        UserId = 5,
                        Name = "Seraphine",
                        About = "My lovely!!",
                        PlantFamily = "Araceae",
                        PlantName = "Gullranke",
                        Image = "https://tise-static.telenorcdn.net/5f26f426af9bb3003190f1ba/image0/e3a38da1-8569-4bb2-b3e8-9d6091734f28/gullranke",
                        Available = true

                    },
                    new Plant
                    {
                        UserId = 5,
                        Name = "Garren",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Gullranke",
                        Image = "https://tise-static.telenorcdn.net/5f26f426af9bb3003190f1ba/image0/e3a38da1-8569-4bb2-b3e8-9d6091734f28/gullranke",
                        Available = false

                    },
                    new Plant
                    {
                        UserId = 5,
                        Name = "Veigar",
                        About = "Got this from my mum. Grows fast, so plenty of cuttings to share!",
                        PlantFamily = "Araceae",
                        PlantName = "Gullranke",
                        Price = 1,
                        Image = "https://www.commodore.no/wp-content/uploads/2022/08/Tomas_kontakt-764x764.jpg",
                        Available = true

                    }
                );
                context.SaveChanges();
            }
        }

    }
}
