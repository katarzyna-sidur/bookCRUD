import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-from',
  templateUrl: './book-from.component.html',
  styleUrls: ['./book-from.component.css']
})
export class BookFromComponent implements OnInit {

    @Input()
    book: Book = {
        Id: null,
        Title: null,
        Author: null,
        HousePublishing: null,
        YearPublishing: null,
        ISBN: null,
        Price: 0
    };

    bookForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

}
