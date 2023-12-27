import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { LoginComponent } from './componants/user/login/login.component';
import { RegisterComponent } from './componants/user/register/register.component';
import { ProfileComponent } from './componants/user/profile/profile.component';
import { HomeComponent } from './componants/home/home.component';
import { UserServices } from './core/services/user_services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { NavComponent } from './componants/shared/nav/nav.component';
import { SingleComponent } from './componants/books/single/single.component';
import { AddBookComponent } from './componants/books/add-book/add-book.component';
import { UpdateBookComponent } from './componants/books/update-book/update-book.component';
import { AllComponent } from './componants/user/all/all.component';
import { EditComponent } from './componants/user/edit/edit.component';
import { EditProfileComponent } from './componants/user/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './componants/user/change-password/change-password.component';
import { CartComponent } from './componants/cart/cart.component';
import { UserOrdersComponent } from './componants/order/user-orders/user-orders.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserSingleOrderComponent } from './componants/order/user-single-order/user-single-order.component';
import { FavouriteComponent } from './componants/favourite/favourite.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    NavComponent,
    SingleComponent,
    AddBookComponent,
    UpdateBookComponent,
    AllComponent,
    EditComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    CartComponent,
    UserOrdersComponent,
    UserSingleOrderComponent,
    FavouriteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [
    UserServices,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
