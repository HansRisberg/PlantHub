//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using PlantHub01.Controllers;
//using PlantHub01.Models;
//using UserContext.Data;
//using Xunit;

//namespace XunitTest // Replace with the namespace where your tests will be located
//{
//    //public class UserControllerTests : IClassFixture<DatabaseFixture>
//    //{
//        //private readonly DatabaseFixture _fixture;

//    //    public UserControllerTests(DatabaseFixture fixture)
//    //    {
//    //        _fixture = fixture;
//    //    }

//    //    [Fact]
//    //    public async Task GetUser_ReturnsUser_WhenUserExists()
//    //    {
//    //        // Arrange
//    //        using PlantHub01Context db = new();

//    //        // Seed the database with test data
//    //        db.User.Add(new User { Id = 1, Name = "John" }); // Replace with your actual User model properties
//    //        await db.SaveChangesAsync();

//    //        var controller = new UsersController(db);

//    //        // Act
//    //        var result = await controller.GetUser(1);

//    //        // Assert
//    //        Assert.IsType<ActionResult<User>>(result);
//    //        Assert.NotNull(result.Value);
//    //        Assert.Equal(1, result.Value.Id);
//    //        Assert.Equal("John", result.Value.Name);
//    //    }

//    //    [Fact]
//    //    public async Task GetUser_ReturnsNotFound_WhenUserDoesNotExist()
//    //    {
//    //        // Arrange
//    //        using PlantHub01Context db = new();

//    //        var controller = new UsersController(db);

//    //        // Act
//    //        var result = await controller.GetUser(99); // Use an invalid user ID that does not exist in the database

//    //        // Assert
//    //        Assert.IsType<ActionResult<User>>(result);
//    //        Assert.IsType<NotFoundResult>(result.Result);
//    //    }
//    //}

//    //// Test fixture to set up and tear down the database for tests
//    //public class DatabaseFixture : IDisposable
//    //{
//    //    public PlantHub01Context Context { get; }

//    //    public DatabaseFixture()
//    //    {
//    //        var options = new DbContextOptionsBuilder<PlantHub01Context>() // Replace with the actual name of your DbContext class
//    //            .UseSqlServer("YourConnectionString") // Replace with your actual database connection string
//    //            .Options;

//    //        Context = new PlantHub01Context(options); // Replace with the actual name of your DbContext class

//    //        // Ensure the database is created and migrated to the latest version
//    //        Context.Database.EnsureCreated();
//    //        Context.Database.Migrate();
//    //    }

//    //    public void Dispose()
//    //    {
//    //        // Clean up the database after all tests have been run
//    //        Context.Database.EnsureDeleted();
//    //        Context.Dispose();
//    //    }
//    //}
//}
