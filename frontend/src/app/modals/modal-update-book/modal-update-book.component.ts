import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BookFromComponent } from 'src/app/components/book-from/book-from.component';

@Component({
    selector: 'app-modal-update-book',
    templateUrl: './modal-update-book.component.html',
    styleUrls: ['./modal-update-book.component.css']
})
export class ModalUpdateBookComponent {

    book: Book;
    @ViewChild('form')
    form: BookFromComponent;

    constructor(private bookService: BookService, public bsModalRef: BsModalRef) { }

    saveBook() {
        this.bookService.updateBook(this.book);
    }

}
