import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root',
})
export class BookServices {
  // constructor(private _http: HttpClient) {}
  // baseURL = 'http://localhost:3000/api/books';
  book: Book | null = null;
  // favBooksIds: any[] = [];
  // favBooks: any[] = [];
  books:Book[] = [];

  addBook(data: any){
    this.books.push(data);
    console.log('add data')
    this.books.forEach(ele => console.log(ele)) 
  }
  getAllBooks(): Book[]{
    return this.books

  }
  
  getSingleBook(id: string): any{
    return this.books.find(ele=>ele._id == id);
  }
  updateBook(id: string, data: any){
    this.books.splice(this.books.findIndex(ele=>ele._id == id),1,data)
    console.log('updated')
  }
  deleteBook(id: string) {
    this.books.splice(this.books.findIndex(ele=>ele._id == id),1)
    console.log('delete')
  }

}
