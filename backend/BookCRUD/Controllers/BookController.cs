using BookCRUD.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BookCRUD.Controllers
{
    public class BookController : ApiController
    {
        private IBookService bookService;

        public BookController(IBookService bookService)
        {
            this.bookService = bookService;
        }

        [HttpGet]
        public IEnumerable<BookDataAccess.Books> Get()
        {
            return bookService.Get();
        }

        [HttpGet]
        public BookDataAccess.Books Get(int id)
        {
            return bookService.Get(id);
        }

        [HttpPost]
        public BookDataAccess.Books Post(BookDataAccess.Books book)
        {
            return bookService.Post(book);
        }
        [HttpPut]
        public BookDataAccess.Books Put(int id, BookDataAccess.Books book)
        {
            return bookService.Put(id, book);
        }

        [HttpDelete]
        public void Delete(int id)
        {
            bookService.Delete(id);
        }
    }
}
