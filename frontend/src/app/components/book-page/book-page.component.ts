import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.model';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalShowBookComponent } from 'src/app/modals/modal-show-book/modal-show-book.component';
import { ModalCreateBookComponent } from 'src/app/modals/modal-create-book/modal-create-book.component';
import { ModalUpdateBookComponent } from 'src/app/modals/modal-update-book/modal-update-book.component';

@Component({
    selector: 'app-book-page',
    templateUrl: './book-page.component.html',
    styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

    books: Book[];

    hiddenBooks = true;

    bsModalRef: BsModalRef;

    constructor(private bookService: BookService, private route: ActivatedRoute, private modalService: BsModalService) { }

    ngOnInit() {
        this.books = this.route.snapshot.data['showBooks'];
    }

    showBook(book: Book) {
        this.bsModalRef = this.modalService.show(ModalShowBookComponent);
        (<ModalShowBookComponent>this.bsModalRef.content).book = book;
    }

    addBook() {
        this.bsModalRef = this.modalService.show(ModalCreateBookComponent);
        (<ModalCreateBookComponent>this.bsModalRef.content).newBook.subscribe((data) => {
            this.books.push(data);
        });
    }

    editBook(book: Book) {
        this.bsModalRef = this.modalService.show(ModalUpdateBookComponent, { initialState: { book }});
        (<ModalUpdateBookComponent>this.bsModalRef.content).book = book;
    }

    deleteBook(book: Book) {
        this.bookService.deleteBook(book.Id).subscribe((result) => {
            this.books = this.books.filter((item) => {
                return item.Id !== book.Id;
            });
        });
    }

}
