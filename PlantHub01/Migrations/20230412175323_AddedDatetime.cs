using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PlantHub01.Migrations
{
    /// <inheritdoc />
    public partial class AddedDatetime : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "Added",
                table: "Plant",
                type: "datetime2",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Added",
                table: "Plant");
        }
    }
}
