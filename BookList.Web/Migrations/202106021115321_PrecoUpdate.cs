namespace CRUD.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class PrecoUpdate : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Book", "Preco", c => c.Single(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Book", "Preco", c => c.Decimal(nullable: false, precision: 18, scale: 2));
        }
    }
}
