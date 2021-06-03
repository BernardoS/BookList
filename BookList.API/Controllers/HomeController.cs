using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BookList.API.Repository;


namespace BookList.API.Controllers
{
    public class HomeController : Controller
    {
        private BookListEntities context { get; set; }
        private UnitOfWork unitOfWork { get; set; }
        public HomeController()
        {
            context = new BookListEntities();
            unitOfWork = new UnitOfWork(context);
        }
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }
        public ActionResult Lista() {
            var allBooks = unitOfWork.Books.GetAll();
            return  Json(allBooks, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult Adiciona(Book book)
        {
            try
            {
                unitOfWork.Books.Add(book);
                unitOfWork.Complete();
            }
            catch (Exception)
            {

                throw;
            }
            

            return View(book);
        } 
    }
}
