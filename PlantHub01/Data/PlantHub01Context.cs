using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PlantHub01.Models;

namespace UserContext.Data
{
    public class PlantHub01Context : DbContext
    {
        public PlantHub01Context (DbContextOptions<PlantHub01Context> options)
            : base(options)
        {
        }

        public DbSet<PlantHub01.Models.User> User { get; set; } = default!;
        public DbSet<PlantHub01.Models.Plant> Plant { get; set; } = default!;
        public DbSet<PlantHub01.Models.Conversation> Conversation { get; set; } = default!;
        public DbSet<PlantHub01.Models.Message> Message { get; set; } = default!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<User>()
                .HasMany(u => u.Conversations)
                .WithOne(c => c.SenderUser)
                .OnDelete(DeleteBehavior.ClientCascade);
        }
    }
}
