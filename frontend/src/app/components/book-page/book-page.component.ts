import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-book-page',
    templateUrl: './book-page.component.html',
    styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

    books: Book[];

    hiddenBooks = true;

    constructor(private bookService: BookService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.books = this.route.snapshot.data['showBooks'];
    }

}
