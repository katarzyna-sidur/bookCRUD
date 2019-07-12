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

        public IEnumerable<BookDataAccess.Books> Get()
        {
            return bookService.Get();
        }
        public BookDataAccess.Books Get(int id)
        {
            return bookService.Get(id);
        }
        public BookDataAccess.Books Post(BookDataAccess.Books book)
        {
            return bookService.Post(book);
        }
        public BookDataAccess.Books Put(int id, BookDataAccess.Books book)
        {
            return bookService.Put(id, book);
        }
        void Delete(int id)
        {
            bookService.Delete(id);
        }
    }
}
