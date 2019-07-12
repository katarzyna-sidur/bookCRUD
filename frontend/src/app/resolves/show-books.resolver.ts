import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { BookService } from '../services/book.service';


@Injectable({
  providedIn: 'root'
})

export class ShowBooksResolver implements Resolve<Book[]> {

    book: Book;

     constructor(private bookService: BookService) {}

      resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Book[] | Observable<Book[]> | Promise<Book[]> {
        return this.bookService.getBooks();
    }
}
