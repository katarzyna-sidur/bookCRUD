import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from '../../services/book.service';
import { BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-show-book',
  templateUrl: './modal-show-book.component.html',
  styleUrls: ['./modal-show-book.component.css']
})
export class ModalShowBookComponent implements OnInit {

    book: Book;

  constructor(private bookService: BookService, public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
