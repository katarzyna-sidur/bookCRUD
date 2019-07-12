using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookCRUD.Interfaces
{
    public interface IBookService
    {
        IEnumerable<BookDataAccess.Books> Get();
        BookDataAccess.Books Get(int id);
        BookDataAccess.Books Post(BookDataAccess.Books book);
        BookDataAccess.Books Put(int id, BookDataAccess.Books book);
        void Delete(int id);

    }
}
