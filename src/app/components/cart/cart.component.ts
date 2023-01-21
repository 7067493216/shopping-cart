import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Cart } from 'src/app/services/cart.interface';
import { ProductViewComponent } from '../product-view/product-view.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ApiService]

})

export class CartComponent {
  public carts: Cart[] = [];
  public immg: any;
  public quant: number = 0;
  public totalPrice: Number = 0;


  constructor(
    private routing: Router,
    private _apiService: ApiService,
    private productViewComponent: ProductViewComponent
  ) {

  }

  ngOnInit(): void {

    this.getAllCarts()
  }

  backToProduct() {
    this.routing.navigate(['/view']);
  }

  onSignout() {
    this.routing.navigate(['/']);
  }

  getAllCarts() {
    this._apiService.getAllProduct('cartss').subscribe((data: any) => {
      console.log(data, "mmmmmmmmmmmmmmmmvvvvvvvvvvvvvvvvvvvvvvmmmmmmmmmmmmmmmm");
      this.carts = data;

      this.carts.map((x: any) => {
        //  console.log(x,"xxxxxxxxxxxxxxx.........");
        var str = new String(x.product.image);
        var splits = str.split("\\");
        x.product.image = splits[2];
      })
      this.totalPrice = this.carts.reduce(this.getTotalPrice, 0);
      this.quant = this.carts.reduce(this.getTotalitemQuantity, 0);
      this.carts.reverse();
    })
  }

  getTotalitemQuantity(quant: number, item: Cart) {
    return quant + (item.quantity);
  }

  getTotalPrice(totalPrice: number, item: Cart) {
    if (item.product.currency == '$') {
      return totalPrice += item.product.price * 72 * item.quantity
    } else {
      return totalPrice += (item.product.price * item.quantity)
    }
  }

  onDelete(userid: any) {
    this._apiService.deleteFromCart(userid).subscribe((x: any) => {
      console.log(this.getAllCarts());
    })
  }

  onDecrease(userid: any, quantity: number) {
    let cartProducttt: any = this.carts.find(x => x.product.id === userid)
   // console.log(cartProducttt, "jjjjjjjjjjjjjjjjjjjjjjjjjj");
    if (cartProducttt) {
      if (cartProducttt.quantity > 1) {
          cartProducttt.quantity -= 1;
          quantity = cartProducttt.quantity;
          this._apiService.updateInCart(cartProducttt.id,cartProducttt).subscribe((data)=>{
            console.log(data,"hhhhhhhhhhhhhhhhhhhhhhhhhhhh");
            
          })
      } else {
        this._apiService.deleteFromCart(cartProducttt.id).subscribe((x: any) => {
          cartProducttt.quantity = 0;
          quantity = cartProducttt.quantity;
        })
      }
  
    } else {
      return;
    }
  }

  onIncrease(userid: any, quantity: any) {
    let cartProducttt: any = this.carts.find(x => x.product.id === userid)
   // console.log(cartProducttt, "jjjjjjjjjjjjjjjjjjjjjjjjjj");
   
    if (cartProducttt.quantity < cartProducttt.product.quantity) {
        cartProducttt.quantity += 1;
        quantity = cartProducttt.quantity;
        this._apiService.updateInCart(cartProducttt.id,cartProducttt).subscribe((data:any)=>{
          console.log(data,"wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
          
        })
    } else {
      alert("Sorry! You Have Reach Maximum Limit");
      return
    }
    this.totalPrice = this.carts.reduce(this.getTotalPrice, 0);
    this.quant = this.carts.reduce(this.getTotalitemQuantity, 0);
 

  }

}



