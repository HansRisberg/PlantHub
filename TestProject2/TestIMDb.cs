//using UserContext.Data;
//using PlantHub01.Models;
//using Microsoft.EntityFrameworkCore;
//using PlantHub01.Controllers;
//using FluentAssertions;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;
//using Xunit;
//using Microsoft.AspNetCore.Mvc;
//using Moq;

//namespace XunitTest
//{

//    public class TestIMDb
//    {
//        private async Task<PlantHub01Context> GetDbContext()
//        {
//            var options = new DbContextOptionsBuilder<PlantHub01Context>()
//                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
//                .Options;
//            var databaseContext = new PlantHub01Context(options);
//            databaseContext.Database.EnsureCreated();
//            if (await databaseContext.User.CountAsync() < 0)
//            {
//                for (int i = 0; i < 10; i++)
//                {
//                    databaseContext.User.Add(
//                        new User()
//                        {
//                            Name = "Belle",
//                            Bio = "VoffVoff! Kooooos!",
//                            Location = "Skedsmo"
//                        });
//                    await databaseContext.SaveChangesAsync();
//                }
//            }
//            return databaseContext;
//        }

//        [Fact]
//        public async void TestPostAndGetUser()
//        {
//            User user = new()
//            {
//                Name = "PlantePappa",
//                Bio = "Klar for livets grønne gleder",
//                Location = "Lørenskog"

//            };
//            var dbContext = await GetDbContext();
//            var usersController = new UsersController(dbContext);

//            var postResult = usersController.PostUser(user);
//            var getResult = usersController.GetUser(user.Id);

//            postResult.Should().NotBeNull();
//            postResult.Should().BeOfType<Task<ActionResult<User>>>();

//            var result = getResult.Result.Value;

//            result.Should().BeEquivalentTo(user);

//        }

//        [Fact]
//        public async void TestPostAndGetPlant()
//        {
//            Plant plant = new()
//            {
//                UserId = 1,
//                Name = "Zoe",
//                About = "I found this AMAZING PLANT!!! I can share, if I get a cutting in return ;)",
//                PlantFamily = "Araceae",
//                PlantName = "Monstera"

//            };
//            var dbContext = await GetDbContext();
//            var plantsController = new PlantsController(dbContext);

//            var postResult = plantsController.PostPlant(plant);
//            var getResult = plantsController.GetPlant(plant.Id);

//            postResult.Should().NotBeNull();
//            postResult.Should().BeOfType<Task<ActionResult<Plant>>>();

//            var result = getResult.Result.Value;

//            result.Should().BeEquivalentTo(plant);


//        }

//        [Fact]
//        public async void TestListPlant()
//        {
//            var dbContext = await GetDbContext();

//            dbContext.AddRange(
//            new Plant
//            {
//                UserId = 1,
//                Name = "Zoe",
//                About = "I found this AMAZING PLANT!!! I can share, if I get a cutting in return ;)",
//                PlantFamily = "Araceae",
//                PlantName = "Monstera"

//            },

//            new Plant
//            {
//                UserId = 1,
//                Name = "Lulu",
//                About = "You can feed it",
//                PlantFamily = "Araceae",
//                PlantName = "Gullranke"

//            },
//            new Plant
//            {
//                UserId = 2,
//                Name = "Nidalee",
//                About = "You can have it",
//                PlantFamily = "Dont know",
//                PlantName = "Dont know"
//            }
//            );
            
//            var plantsController = new PlantsController(dbContext);

//            //var postResult = plantsController.PostPlant(plant);
//            var result = plantsController.GetPlant();

//            result.Should().NotBeNull();
//            result.Should().BeOfType<Task<ActionResult<IEnumerable<Plant>>>>();
//        }

//        [Fact]
//        public async void TestUpdatePlant()
//        {
//            Plant oldPlant = new()
//            {
//                UserId = 1,
//                Name = "Zoe",
//                About = "I found this AMAZING PLANT!!! I can share, if I get a cutting in return ;)",
//                PlantFamily = "Araceae",
//                PlantName = "Monstera"

//            };
//            Plant newPlant = new()
//            {
//                UserId = 1,
//                Name = "Zoe",
//                About = "No cuttings available till may!",
//                PlantFamily = "Araceae",
//                PlantName = "Monstera"

//            };

//            var dbContext = await GetDbContext();
//            var plantsController = new PlantsController(dbContext);

//            var postResult = plantsController.PostPlant(oldPlant);
//            var updateResult = plantsController.PutPlant(oldPlant.Id, newPlant);
//            var getResult = plantsController.GetPlant(newPlant.Id);

//            updateResult.Should().NotBeNull();
//            updateResult.Should().BeOfType<Task<IActionResult>>();

//            var result = getResult.Result.Value;

//            //result.About.Should().BeEquivalentTo(newPlant.About);
//        }


//        //[Fact]
//        //public async Task Index_ReturnsAViewResult_WithAListOfBrainstormSessions()
//        //{
//        //    // Arrange
//        //    var mockRepo = new Mock<IBrainstormSessionRepository>();
//        //    mockRepo.Setup(repo => repo.ListAsync())
//        //        .ReturnsAsync(GetTestSessions());
//        //    var controller = new HomeController(mockRepo.Object);

//        //    // Act
//        //    var result = await controller.Index();

//        //    // Assert
//        //    var viewResult = Assert.IsType<ViewResult>(result);
//        //    var model = Assert.IsAssignableFrom<IEnumerable<StormSessionViewModel>>(
//        //        viewResult.ViewData.Model);
//        //    Assert.Equal(2, model.Count());
//        //}
//    }
//}