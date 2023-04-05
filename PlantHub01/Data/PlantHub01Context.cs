using System;
using System.Collections.Generic;
using System.Linq;
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
    }
}
