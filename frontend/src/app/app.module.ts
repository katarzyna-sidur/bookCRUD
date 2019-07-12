import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { BookPageComponent } from './components/book-page/book-page.component';
import { ShowBooksResolver } from './resolves/show-books.resolver';
import { BookService } from './services/book.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalShowBookComponent } from './modals/modal-show-book/modal-show-book.component';
import { BookFromComponent } from './components/book-from/book-from.component';
import { ModalCreateBookComponent } from './modals/modal-create-book/modal-create-book.component';

const appRoutes: Routes = [
    {
        path: 'book', component: BookPageComponent, resolve: {
            showBooks: ShowBooksResolver
        }
    },
    { path: '', redirectTo: '/book', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        BookPageComponent,
        ModalShowBookComponent,
        BookFromComponent,
        ModalCreateBookComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        ModalModule.forRoot()
    ],
    entryComponents: [
        ModalShowBookComponent,
        ModalCreateBookComponent
    ],
    providers: [BookService],
    bootstrap: [AppComponent]
})
export class AppModule { }
