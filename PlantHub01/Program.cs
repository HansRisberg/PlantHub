using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using UserContext.Data;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<PlantHub01Context>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("PlantHub01Context") ?? throw new InvalidOperationException("Connection string 'PlantHub01Context' not found.")));

// Add services to the container.

builder.Services.AddCors();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

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


app.MapControllers();

app.MapFallbackToFile("index.html");

app.Run();
