using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PlantHub01.Migrations
{
    /// <inheritdoc />
    public partial class fkupdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Conversation_PlantId",
                table: "Conversation",
                column: "PlantId");

            migrationBuilder.AddForeignKey(
                name: "FK_Conversation_Plant_PlantId",
                table: "Conversation",
                column: "PlantId",
                principalTable: "Plant",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Conversation_Plant_PlantId",
                table: "Conversation");

            migrationBuilder.DropIndex(
                name: "IX_Conversation_PlantId",
                table: "Conversation");
        }
    }
}
