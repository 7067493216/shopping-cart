import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Cart } from 'src/app/services/cart.interface';
import { User } from 'src/app/services/user.interface';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  providers: [ApiService]
})
@Injectable({
  providedIn: 'root'
})
export class ProductViewComponent {
  public usersProduct: Cart[] = [];
  proData: any;
  Products: User[] = [];
  immg: any;
  carts: any
  quantities: any;
  searchItem: any;
  cc: any;


  constructor(
    private routing: Router,

    private _apiService: ApiService,

    // private dataCartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.getAllAdminProduct();
    this.getAllcartitemms();


  }
  goToForm(e: any) {
    this.routing.navigate(['/cart']);
  }

  onSignout() {

    this.routing.navigate(['/']);
  }

  productAddToCart(userId: any, quantity: number) {
    this._apiService.getProductById(userId, 'products').subscribe((data: any) => {
      console.log(data, "userdata");
      this.carts = data;

      //console.log(this.carts, "this.cartsthis.cartsthis.carts*******");
      let carrt: any = this.usersProduct.find((x: any) => x.product.id === userId)


      //  console.log(carrt, "rrrrrrrrrrrrrrrrrrr");
      let abc: Cart = { id: this.usersProduct.length + 1, product: this.carts, quantity: 1 }

      if (carrt == undefined) {
        // this.usersProduct.push(abc);
        this._apiService.addInCart({ id: this.usersProduct.length + 1, product: this.carts, quantity: 1 }).subscribe((res: any) => {
          this.getAllcartitemms();
        })


      }
      // else {
      //   carrt.quantity += 1;
      //   this.quantities = carrt.quantity;

      // }
    })
    //console.log( this.usersProduct,";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;");  
  }

  getAllcartitemms() {
    this._apiService.getAllProduct('cartss').subscribe((data: any) => {
      console.log(data, "fhhhhhhhfhfhhfhfhfhhfhfhfhfhfhh");
      // console.log(data,"getAllcartitemmsgetAllcartitemmsgetAllcartitemmsgetAllcartitemmsgetAllcartitemmsgetAllcartitemms");
      this.usersProduct = data;
      //console.log(this.usersProduct, "usersProductusersProductusersProductusersProductusersProductusersProductusersProduct");
    })
  }


  onItemIncrease(userId: any, quantity: number) {
    let carrt: any = this.usersProduct.find((x: any) => x.product.id === userId)
    console.log(carrt, "rrrrrrrrrrrrrrrrrrr");
    if (carrt == undefined) {
      this._apiService.addInCart({ id: this.usersProduct.length + 1, product: this.carts, quantity: 1 }).subscribe((res: any) => {
      })
    } else {
      if (carrt.quantity < carrt.product.quantity) {
        carrt.quantity += 1;
        quantity = carrt.quantity;
        this._apiService.updateInCart(carrt.id, carrt).subscribe((data: any) => {
          console.log(data, "ooooooooooooooooooooo");
        })
        // this._apiService.getAllProduct('cartss').subscribe((y: any) => {
        //   console.log(y, "yyyyyyyyyyyyyyyyyyyyyyyyyyyy12345");
        // })
      } else {
        alert("Sorry! You Have Reach Maximum Limit");
        return
      }
    }
  }

  getAllAdminProduct() {


    this._apiService.getAllProduct('products').subscribe((data: any) => {
      //  console.log(data,"datadatadatadatadatadatadatadatadata.....datadatadatadata.....datadatadata");


      var localProducts = data;

      this.Products = localProducts.map((x: User) => {
        //this.idx = this.Products.length;
        var str = new String(x.image);
        var splits = str.split("\\");
        //  console.log(splits, "nnnaammmeee");
        x.image = splits[2];
        x.quantity = this.usersProduct.find((y: Cart) => y.product.id == x.id)?.quantity || 0
        console.log("dfkjdhfkdsf--------", this.usersProduct.find((y: Cart) => y.product.id == x.id)?.quantity || 0);
        return x;

      });

      this.Products.reverse();
    })
  }





  returnToCartQuantity(userId: number) {

    let cartval = this.usersProduct.find(x => x.product.id === userId);
    //  this.quantities = cartval;
    if (cartval != null) {
      return cartval?.quantity;
    } else {
      return 0;
    }


  }





  onItemReduce(userId: any, quantity: number) {
    let cartQuant = this.returnToCartQuantity(userId)

    let cartProducttt: any = this.usersProduct.find((x: any) => x.product.id === userId)
    // console.log(cartProducttt, "jjjjjjjjjjjjjjjjjjjjjjjjjj");
    if (cartProducttt) {

      // console.log(data, "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");

      if (cartProducttt.quantity > 1) {

        cartProducttt.quantity -= 1;
        quantity = cartProducttt.quantity;
        this._apiService.updateInCart(cartProducttt.id, cartProducttt).subscribe((data: any) => {
          console.log(data, "ppppppppppppppppppppppppppppppppppp");
        })

      } else {
        this._apiService.deleteFromCart(cartProducttt.id).subscribe((x: any) => {
          // cartProducttt.quantity = 0;
          // cartQuant = cartProducttt.quantity;
        })
      }
    } else {
      return;
    }
  }
}









