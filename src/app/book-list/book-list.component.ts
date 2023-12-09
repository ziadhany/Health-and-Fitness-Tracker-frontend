import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Books} from "../book/book.component";


@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit  {
  bookList: Books[] = [
    {
      id: 1,
      title: 'Harry Potter and The Deathly Hallows',
      description: '',
      imageUrl: 'assets/book1.jpg'
    },
    {
      id: 2,
      title: 'Simple Way Of Piece Life',
      description: '',
      imageUrl: 'assets/book2.jpg'
    },
    {
      id: 3,
      title: 'The Fault In Our Stars',
      description: '',
      imageUrl: 'assets/book3.jpg'
    },
    {
      id: 4,
      title: 'Madelene Brent "A Heritage of Shadows"',
      description: '',
      imageUrl: 'assets/book4.jpg'
    },
    {
      id: 5,
      title: 'The Girl in the letter',
      description: '',
      imageUrl: 'assets/book5.jpg'
    },
    {
      id: 6,
      title: 'Atomic Habits',
      description: '',
      imageUrl: 'assets/book6.jpg'
    }];
  constructor() {}
  ngOnInit(): void {}

  // searchBooks(){
  //   this.bookList = this.bookList.filter(res=>{
  //     return res.title.toLocaleLowerCase().match(this.searchtext.toLocaleLowerCase());
  //   })
  // }

}
