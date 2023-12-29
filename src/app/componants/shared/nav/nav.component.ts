import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../../core/models/user';
import { BookServices } from '../../../core/services/book_services';
import { UserServices } from '../../../core/services/user_services';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(
    public userServices: UserServices,
    private bookServices: BookServices,
    private router: Router,
    private toastr: ToastrService
  ) {
    userServices.getMe().subscribe((res) => {
      if (res.success) {
        this.userServices.isLoggedIn = true;
        this.userServices.user = res.user;
        this.bookServices.getFavBooks().subscribe(
          (res) => {
            this.bookServices.favBooks = res.data;
            this.bookServices.favBooksIds = res.dataIds;
          },
          (e) => console.log(e)
        )
      }
    });
  }
  handelLogOut() {
    this.userServices.logout().subscribe((res) => {
      console.log(res);

      if (!res.success) {
        this.toastr.error(res.msg);
        return;
      }
      this.userServices.isLoggedIn = false;
      this.userServices.user = null;
      localStorage.removeItem('token');
      this.bookServices.favBooks = [];
      this.bookServices.favBooksIds = [];
      this.toastr.success(res.msg);
      this.router.navigateByUrl('/');
    });
  }
  ngOnInit(): void {}
}
