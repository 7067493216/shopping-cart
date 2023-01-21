import { Component, Injectable, OnInit } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Cart } from 'src/app/services/cart.interface';
import { User } from '../../services/user.interface';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
@Injectable({
  providedIn: 'root'
})

export class ProductsComponent implements OnInit {
  Products: User[] = [];
  immg: any;
  idx: any; //this.Products.length
  alldata: User[] = [];
  Id: any;

  carts: Cart[] = [];
  localProducts: any;





  constructor(
    private routing: Router,
    private _apiService: ApiService,
    private addProductComponent: AddProductComponent
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  onAddProduct(e: any) {
    this.routing.navigate(['/addProduct']);
    console.log(this.getAllProducts());
  }

  getAllProducts() {
    this._apiService.getAllProduct('products').subscribe((data: any) => {
      console.log(data, "datadatadatadatadatadatadatadatadata....................................");
      this.localProducts = data;

      console.log("porduct00000000000000", this.localProducts);
      this.Products = this.localProducts.map((x: User) => {
        this.idx = this.Products.length;
        var str = new String(x.image);
        var splits = str.split("\\");
        //  console.log(splits, "nnnaammmeee");
        x.image = splits[2];
        return x;
      });

      this.Products.reverse();
    })

  }

  deleteRow(userid: number) {
  
      this._apiService.deleteProduct(userid).subscribe((y: any) => {
        console.log(this.getAllProducts());

      })
      this.getAllProducts()
  }

  editRow(userId: number) {
    let user: any = this.Products.find((u: User) => {
      u.id === userId
      console.log(u, "uuuuuuuuuuuuuuuuuuuuuuuuu");
      // console.log(u.image, "xxxxxxxxxxxxxxxxxxxxxxxx");
      this.routing.navigate([`/addProduct/${userId}`]);

    });
  }

  deleteAllProduct() {

  }

}
