import { Routes } from '@angular/router';
import {BookComponent} from "./book/book.component";
import {WishListComponent} from "./wish-list/wish-list.component";
import {HomeComponent} from "./home/home.component";
import { AddBookComponent } from './admin-management/add-book/add-book.component';
import { UpdateBookComponent } from './admin-management/update-book/update-book.component';
import {SingleBookComponent} from "./admin-management/single-book/single-book.component";
import {LoginComponent} from "./auth/login/login.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {BookListComponent} from "./book-list/book-list.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'book', component: BookComponent },
  { path: 'wish-list', component: WishListComponent },
  { path: "add-book", component: AddBookComponent},
  { path: "update-book", component: UpdateBookComponent},
  { path: "single-book", component: SingleBookComponent},
  { path: "wish-list", component: WishListComponent},
  { path: "user-profile", component: UserProfileComponent},
  { path: "book-list", component: BookListComponent},

];
