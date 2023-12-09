import { Component } from '@angular/core';
import { Book } from '../../core/models/Book';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-single-book',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './single-book.component.html',
  styleUrl: './single-book.component.css'
})
export class SingleBookComponent {
  book: Book | undefined;

  ngOnInit(): void {

    this.book = {
      title:"Harry Potter",
      author :"J.K.Rowling",
      category:"fantasy",
      description:"The novels follow Harry Potter, an 11-year-old boy who discovers he is the son of famous wizards and will attend Hogwarts School of Witchcraft and Wizardry. Harry learns of an entire society of wizards and witches. He befriends several Hogwarts students and ",
      price:100,
      image: "src/assets/images/Harry.jpg",
      numOfPages:100,
      quantity:2
    };


  }
  deleteBook() {
    console.log("this book is deleted")
  }
}
