import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookServices {
  constructor(private _http: HttpClient) {}
  baseURL = 'http://localhost:8080/books';
  book: Book | null = null;
  favBooksIds: any[] = [];
  favBooks: any[] = [];

  addBook(data: any): Observable<any> {
    return this._http.post(`${this.baseURL}/`, data);
  }
  getAllBooks(): Observable<any> {
    return this._http.get(`${this.baseURL}/`);
  }
  getSingleBook(id: string): Observable<any> {
    return this._http.get(`${this.baseURL}/${id}`);
  }
  updateBook(id: string, data: any): Observable<any> {
    return this._http.put(`${this.baseURL}/${id}`, data);
  }
  deleteBook(id: string): Observable<any> {
    return this._http.delete(`${this.baseURL}/${id}`);
  }
  addToFavourite(data:any): Observable<any>{
    return this._http.post(`${this.baseURL}/addtofavourite`,data);
  }
  getFavBooks(): Observable<any>{
    return this._http.get(`${this.baseURL}/favbooks`);
  }
  deleteBookFromFav(id:string): Observable<any>{
    return this._http.delete(`${this.baseURL}/deletefromfav/${id}`);
  }
}
