import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';


@Injectable({
    providedIn: 'root'
})
export class BookService {

    baseUrl = 'https://localhost:44344/api/book';

    constructor(private httpClient: HttpClient) { }

    getBooks(): Observable<Book[]> {
        return this.httpClient.get<Book[]>(this.baseUrl);
    }

    getBook(id: number): Observable<Book> {
        return this.httpClient.get<Book>(this.baseUrl + '/' + id.toString());
    }

    saveBook(book: Book): Observable<Book> {
        return this.httpClient.post<Book>(this.baseUrl, book);
    }

    updateBook(book: Book): Observable<Book> {
        return this.httpClient.put<Book>(this.baseUrl + '/' + book.Id.toString(), book);
    }

    deleteBook(id: number): Observable<Book> {
        return this.httpClient.delete<Book>(this.baseUrl + '/' + id.toString());
    }

}
