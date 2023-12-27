import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../../core/models/user';
import { UserServices } from '../../../core/services/user_services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User | undefined;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private _userService: UserServices
  ) {}

  ngOnInit(): void {
    this._userService.getMe().subscribe((res) => {
      if (!res.success) {
        this.toastr.error('Login first To access this page');
        this.router.navigateByUrl('/login');
        return;
      }
      this.user = res.user;
    });
  }
}
