using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PlantHub01.Migrations
{
    /// <inheritdoc />
    public partial class newstuff : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Picture",
                table: "User",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "Plant",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Picture",
                table: "User");

            migrationBuilder.DropColumn(
                name: "Image",
                table: "Plant");
        }
    }
}
