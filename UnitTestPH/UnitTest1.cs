using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using PlantHub01.Controllers;
using PlantHub01.Models;
using System;
using UserContext.Data;
using Moq;

namespace UnitTestPH

{

    [TestFixture]
    public class PlantsControllerTests
    {
        private Mock<PlantHub01Context> _mockContext;
        private PlantsController _plantsController;

        [SetUp]
        public void SetUp()
        {
            _mockContext = new Mock<PlantHub01Context>();
            _plantsController = new PlantsController(_mockContext.Object);
        }

        //    [Test]
        //    public async Task TestPostPlant()
        //    {
        //        // Arrange
        //        Plant plant = new Plant
        //        {
        //            UserId = 1,
        //            Name = "Pikachu",
        //            PlantName = "Monstera",
        //            Price = 0
        //        };

        //        _mockContext.Setup(c => c.Plant).Returns(MockDbSet<Plant>(new List<Plant>()));

        //        // Act
        //        var result = await _plantsController.PostPlant(plant);

        //        // Assert
        //        Assert.That(result, Is.TypeOf<CreatedAtActionResult>());
        //        var createdResult = result as CreatedAtActionResult;
        //        Assert.That(createdResult.ActionName, Is.EqualTo("GetPlant"));
        //        Assert.That(createdResult.RouteValues["id"], Is.EqualTo(plant.Id));
        //        Assert.That(createdResult.Value, Is.EqualTo(plant));
        //        _mockContext.Verify(c => c.SaveChangesAsync(), Times.Once);
        //        _mockContext.Verify(c => c.Plant.Add(It.IsAny<Plant>()), Times.Once);
        //    }

        //    // Helper method to create a mock DbSet
        //    private DbSet<T> MockDbSet<T>(List<T> data) where T : class
        //    {
        //        var queryableData = data.AsQueryable();
        //        var mockSet = new Mock<DbSet<T>>();
        //        mockSet.As<IQueryable<T>>().Setup(m => m.Provider).Returns(queryableData.Provider);
        //        mockSet.As<IQueryable<T>>().Setup(m => m.Expression).Returns(queryableData.Expression);
        //        mockSet.As<IQueryable<T>>().Setup(m => m.ElementType).Returns(queryableData.ElementType);
        //        mockSet.As<IQueryable<T>>().Setup(m => m.GetEnumerator()).Returns(queryableData.GetEnumerator());
        //        return mockSet.Object;
        //    }
        //}

        public class Tests
        {

            private readonly PlantHub01Context _context;

            public Tests(PlantHub01Context context)
            {
                _context = context;
            }



            //[OneTimeSetUp]
            //public void OneTimeSetUp()
            //{
            //    AssistMethods.RebuildDatabase();
            //}

            //[SetUp]
            //public void Setup()
            //{
            //    AssistMethods.ClearDatabase();
            //}

            //[TestCase("Pikachu", "Monstera", 0)]
            //[TestCase("Squirtle", "Gullranke", 200)]
            //[TestCase("Charmander", "Magnolia", 0)]
            //[TestCase("Bulbasaur", "Sølvranke", 50)]
            //public void TestPostPlant(string name, string plantname, int price)
            //{
            //    using PlantHub01Context db = new();
            //    Plant plant = new()
            //    {
            //        Name = name,
            //        PlantName = plantname,
            //        Price = price,
            //    };
            //    int id = PlantsController.PostPlant(plant);
            //    Plant actual = db.Plant.FirstOrDefault(p => p.Id == id)!;
            //    Assert.That(actual.Name, Is.EqualTo(name));
            //    Assert.That(actual.PlantName, Is.EqualTo(plantname));
            //    Assert.That(actual.Price, Is.EqualTo(price));

            //}

            //[Test]
            //public void TestCreateThenReadPlant() 
            //{
            //  PlantsController

            //}
        }
    }
}