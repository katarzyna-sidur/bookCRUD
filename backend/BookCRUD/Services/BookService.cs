using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BookCRUD.Interfaces;
using BookDataAccess;

namespace BookCRUD.Services
{
    public class BookService: IBookService
    {
        public IEnumerable<BookDataAccess.Books> Get()
        {
            using(BookDBEntities entities = new BookDBEntities())
            {
                return entities.Books.ToList();
            }
        }

        public BookDataAccess.Books Get(int id)
        {
            using(BookDBEntities entities = new BookDBEntities())
            {
                var entity = entities.Books.FirstOrDefault(e => e.Id == id);

                if(entity == null)
                {
                    throw new Exception("Not found!");
                }

                return entity;
            }
        }

        public BookDataAccess.Books Post(BookDataAccess.Books book)
        {
            try
            {
                using (BookDBEntities entities = new BookDBEntities())
                {
                    var result = entities.Books.Add(book);
                    entities.SaveChanges();

                    return result;
                }
            }
            catch(Exception ex)
            {
                throw new Exception("Error cannot add this book", ex);
            }
        }

        public BookDataAccess.Books Put(int id,BookDataAccess.Books book)
        {
            try
            {
                using(BookDBEntities entities = new BookDBEntities())
                {
                    var entity = entities.Books.FirstOrDefault(e => e.Id == id);

                    if(entity == null)
                    {
                        throw new Exception("Error cannot update book");
                    }

                    entities.Entry(entity).CurrentValues.SetValues(book);
                    entities.SaveChanges();

                    return entities.Entry(entity).Entity;
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Cannot update book", ex);
            }
        }

        public void Delete (int id)
        {
            try
            {
                using (BookDBEntities entities = new BookDBEntities())
                {
                    var entity = entities.Books.FirstOrDefault(e => e.Id == id);

                    if(entity == null)
                    {
                        throw new Exception("Cannot delete book!");
                    }

                    entities.Books.Remove(entity);
                    entities.SaveChanges();
                }
            }
            catch(Exception ex)
            {
                throw new Exception("Cannot delete book", ex);
            }
        }
    }
}