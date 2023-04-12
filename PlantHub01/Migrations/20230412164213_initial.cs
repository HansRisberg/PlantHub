using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PlantHub01.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Latitude",
                table: "Plant");

            migrationBuilder.DropColumn(
                name: "Longitude",
                table: "Plant");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "Latitude",
                table: "Plant",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Longitude",
                table: "Plant",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }
    }
}
