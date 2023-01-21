import {HttpClient, HttpHeaders} from '@angular/common/http';  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart.interface';

import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url: string = "http://localhost:4200/api/";

 
  constructor(private _httpService: HttpClient) { }

getAllProduct(keyName:any){
  return this._httpService.get(this.base_url + keyName );
}

getProductById(userId:number,keyName:any){
  return this._httpService.get(`${this.base_url}products/${userId}`,keyName)
}

addProduct(product:User){
  var res = this._httpService.post(`http://localhost:4200/api/products`,product);
  console.log(res,"999999999999999999999999999");
  return res;
}

updateProduct(product:User){
  return this._httpService.put(`${this.base_url}products/${product.id}`,product)
}

deleteProduct(userId:number){
return this._httpService.delete(`${this.base_url}products/${userId}`)
}

addInCart(cartsss:Cart){
  var res = this._httpService.post(`${this.base_url}cartss`,cartsss);
  return res;
}
updateInCart(userId:number, cartsss:Cart){
  var res = this._httpService.put(`${this.base_url}cartss/${userId}`, cartsss);
  return res;
}
deleteFromCart(userId:number){
  return this._httpService.delete(`${this.base_url}cartss/${userId}`)
  }



}
