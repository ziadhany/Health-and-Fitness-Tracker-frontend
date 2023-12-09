import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Books} from "../book/book.component";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit  {
  searchtext: any;
  bookList: Books[] = [
    {
      id: 1,
      title: 'Harry Potter and The Deathly Hallows',
      description: '',
      imageUrl: 'assets/images/book1.jpg'
    },
    {
      id: 2,
      title: 'Simple Way Of Piece Life',
      description: '',
      imageUrl: 'assets/images/book2.jpg'
    },
    {
      id: 3,
      title: 'The Fault In Our Stars',
      description: '',
      imageUrl: 'assets/images/book3.jpg'
    },
    {
      id: 4,
      title: 'Madelene Brent "A Heritage of Shadows"',
      description: '',
      imageUrl: 'assets/images/book4.jpg'
    },
    {
      id: 5,
      title: 'The Girl in the letter',
      description: '',
      imageUrl: 'assets/images/book5.jpg'
    },
    {
      id: 6,
      title: 'Atomic Habits',
      description: '',
      imageUrl: 'assets/images/book6.jpg'
    }];
  constructor() {}
  ngOnInit(): void {}

  searchBooks(){
    this.bookList = this.bookList.filter(res=>{
      return res.title.toLocaleLowerCase().match(this.searchtext.toLocaleLowerCase());
    })
  }

}
