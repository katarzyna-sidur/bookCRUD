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

}
