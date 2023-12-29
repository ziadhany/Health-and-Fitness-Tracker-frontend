import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from '../../../core/models/book';
import { BookServices } from '../../../core/services/book_services';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css'],
})
export class SingleComponent implements OnInit {
  id!: string | null;
  book: Book | undefined;
  urlImage: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,

    private toastr: ToastrService,
    private bookServices: BookServices
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('bookId');
    if (!this.id) {
      this.toastr.error('Please Enter Book ID');
      this.router.navigateByUrl('/');
      return;
    }
    this.bookServices.getSingleBook(this.id).subscribe(
      (res) => {
        this.book = res;
        console.log(this.book);
      },
      (e) => {
        this.toastr.error('There is No Book with that ID');
        this.router.navigateByUrl('/');
        return;
      }
    );
  }
}
