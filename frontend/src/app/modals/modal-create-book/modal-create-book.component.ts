import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { BookFromComponent } from 'src/app/components/book-from/book-from.component';
import { BookService } from '../../services/book.service';
import { Book } from 'src/app/models/book.model';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-modal-create-book',
    templateUrl: './modal-create-book.component.html',
    styleUrls: ['./modal-create-book.component.css']
})
export class ModalCreateBookComponent implements OnInit {

    @ViewChild('form')
    form: BookFromComponent;

    @Output()
    newBook = new EventEmitter<Book>();

    constructor(private bookService: BookService, public bsModalRef: BsModalRef) { }

    ngOnInit() {
    }

    saveBook() {
        this.bookService.saveBook(this.form.book).subscribe((data) => {
            this.newBook.emit(data);
            this.bsModalRef.hide();
        });
    }

}
