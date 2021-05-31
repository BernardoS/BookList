using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using CRUD.Models;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace CRUD.Dal
{
	public class BookContext : DbContext
	{

        public BookContext() : base("default")
        {
        }

		public DbSet<Book> Students { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }

    }
}