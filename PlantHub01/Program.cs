using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Text.Json.Serialization;
using PlantHub01.Models;
using UserContext.Data;




var builder = WebApplication.CreateBuilder(args);

var connection = String.Empty;

builder.Configuration.AddEnvironmentVariables().AddJsonFile("appsettings.Development.json");
connection = builder.Configuration.GetConnectionString("AZURE_SQL_CONNECTIONSTRING");

builder.Services.AddDbContext<PlantHub01Context>(options =>
    options.UseSqlServer(connection));
//options.UseSqlServer(builder.Configuration.GetConnectionString("PlantHub01Context") ?? throw new InvalidOperationException("Connection string 'PlantHub01Context' not found.")));


// Add services to the container.

builder.Services.AddCors();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// This is added in order to ingore circular references created by joining conversations with plant table
builder.Services.AddControllers().AddJsonOptions(x =>
                x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

var app = builder.Build();
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    //SeedData.Initialize(services);
}

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseCors(c =>
{
    c
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin();
});

app.UseStaticFiles();
app.UseRouting();

app.UseSwagger();
app.UseSwaggerUI();
app.MapControllers();

app.MapFallbackToFile("index.html");

app.Run();
