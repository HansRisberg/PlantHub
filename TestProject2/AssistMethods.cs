using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserContext.Data;
using Microsoft.EntityFrameworkCore;


namespace UnitTestPH
{
    public static class AssistMethods
    {
        //public static void ClearDatabase()
        //{
        //    using PlantHub01Context db = new();
        //    db.RemoveRange(db.User);
        //    db.RemoveRange(db.Plant);
        //    db.SaveChanges();
        //    //Restart IDENTITY counting at 1 for tables with auto - incrementing PKs(6 of the 7 tables).
        //    //(Note: Hardcoded tablenames, doublecheck singular / plural vs.your naming convention.)
        //    db.ResetIdentityStartingValue("User");
        //    db.ResetIdentityStartingValue("Plant");
        //    db.ResetIdentityStartingValue("Conversation");
        //    db.ResetIdentityStartingValue("Message");
        //    db.SaveChanges();

        //}
        //public static void RebuildDatabase()
        //{
        //    using PlantHub01Context db = new();
        //    db.Database.EnsureDeleted();
        //    db.Database.Migrate();
        //}




    }
}
