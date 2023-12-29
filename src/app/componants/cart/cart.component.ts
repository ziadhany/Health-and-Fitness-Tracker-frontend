import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from '../../core/models/book';
import { BookServices } from '../../core/services/book_services';
import { CartServices } from '../../core/services/cart_services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartData: any[] = [];
  totalPrice!: number;
  urlImage: string = 'http://localhost:3000/images/';

  constructor(
    private bookServices: BookServices,
    private cartServices: CartServices,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.cartServices.getCart().subscribe(
      (res) => {
        this.cartData = res.books;
        this.totalPrice = res.totalPrice;
      },
      (e) => console.log(e),
      () => {}
    );
  }

  incrementCount(countInput:any){
    countInput.value++;
  }

  decrementCount(countInput:any){
    if(countInput.value >1){
      countInput.value--;
    }
  }

  changeCountFun(countInput:any,bookId:string){
    let bookCount = Number(countInput.value);
    if(typeof bookCount == "number" && bookCount>0){
      let data = {bookCount};
      this.cartServices.changeBookCount(data,bookId).subscribe(
        (res)=>{
          this.toastr.success(res.msg); 
          this.totalPrice = res.totalPrice;
          this.cartData = res.books;
        },
        (e)=>console.log(e) 
      )
    }
  }

  deleteFromCart(bookId:string,bookPrice:number,bookCount:number) {
    this.cartServices.deleteCart(bookId,bookCount,bookPrice).subscribe(
      (res) => {
        this.toastr.success(res.msg);
        this.cartData = this.cartData.filter((book)=>book.bookId != bookId);
        this.totalPrice = res.data.totalPrice;
      },
      (e)=>{
        this.toastr.error(e.msg);
      }
      );
  }

  checkout(cartBooks: any[], totalPrice: number) {
    let today = new Date();
    let todaymonth = String(today.getMonth()+1).padStart(2,'0');
    const data = {
      products: cartBooks,
      totalPrice,
      dateCreated: today.getFullYear()+"-"+todaymonth+"-"+today.getDate(),
    };
    this.cartServices.checkOut(data).subscribe(
      (res) => {
        this.toastr.success(res.msg);
        this.router.navigateByUrl(`/`);
      },
      (e) =>{
        this.toastr.error(e.msg);
        this.router.navigateByUrl('/');
      }
    );
  }
}
