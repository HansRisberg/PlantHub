//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;
//using UserContext.Data;

//namespace UnitTestPH
//{
//    public static class AssistMethods
//    {
//        //public static void ClearDatabase()
//        //{
//        //    using PlantHub01Context db = new();
//        //    db.RemoveRange(db.User);
//        //    db.RemoveRange(db.Plant);
//        //    db.SaveChanges();
//        //    // Restart IDENTITY counting at 1 for tables with auto-incrementing PKs (6 of the 7 EfSamurai tables).
//        //    // (Note: Hardcoded tablenames, doublecheck singular/plural vs. your naming convention.)
//        //    db.ResetIdentityStartingValue("PocketMonster");
//        //    db.ResetIdentityStartingValue("Battle");
//        //    db.ResetIdentityStartingValue("Move");
//        //    db.ResetIdentityStartingValue("PokemonBattle");
//        //    db.ResetIdentityStartingValue("PokemonMove");
//        //    db.SaveChanges();

//        //}
//        //public static void RebuildDatabase()
//        //{
//        //    using PlantHub01Context db = new();
//        //    db.Database.EnsureDeleted();
//        //    db.Database.Migrate();
//        //}

//        //public void ResetIdentityStartingValue(string tableName, int startingValue = 1)
//        //{
//        //    Database.ExecuteSqlRaw("IF EXISTS(SELECT * FROM sys.identity_columns " +
//        //    $"WHERE OBJECT_NAME(OBJECT_ID) = '{tableName}' AND last_value IS NOT NULL) " +
//        //    $"DBCC CHECKIDENT({tableName}, RESEED, {startingValue - 1});");
//        //}



//    }
//}
