import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { Cart } from './cart.interface';
import {User} from './user.interface';
@Injectable({
  providedIn: 'root'
})

export class DataService implements InMemoryDbService {
  createDb(){
    let products: User[] = [
      {id: 1,name:'alam', gender:'Male', price:300,currency:'$',image:'C:\\fakepath\\green t-shirt.jfif',  color:'green',quantity:5 },
      {id: 2,name:'sam', gender:'Male', price:500,currency:'$',image:'C:\\fakepath\\white t-shirt.jfif',  color:'white',quantity:5 },
      {id: 3,name:'tanya', gender:'Female', price:300,currency:'$',image:'C:\\fakepath\\blue t-shirt.jfif',  color:'blue',quantity:5 },
      {id: 4,name:'sammmm', gender:'Male', price:500,currency:'$',image:'C:\\fakepath\\grey T-shirt.jfif',  color:'grey',quantity:5 }, 
      {id: 5,name:'alammm', gender:'Male', price:300,currency:'$',image:'C:\\fakepath\\red t-shirt.jfif',  color:'red',quantity:5 },
      {id: 6,name:'samddd', gender:'Male', price:500,currency:'$',image:'C:\\fakepath\\black t-shirt2.jfif',  color:'black',quantity:5 },
    ];
    let cartss: Cart[] = [
      {id: 1,product: {id: 1,name:'alam', gender:'Male', price:300,currency:'$',image:'C:\\fakepath\\green t-shirt.jfif',  color:'yellow',quantity:5 },quantity:1 },
      {id: 2,product: {id: 2,name:'sam', gender:'Male', price:500,currency:'$',image:'C:\\fakepath\\white t-shirt.jfif',  color:'grey',quantity:5 },quantity:1 },
    ];
    return {products,cartss};
  }
  
}


// {id: 1,product: {id: 1,name:'alam', gender:'Male', price:300,currency:'$',image:'C:\\fakepath\\green t-shirt.jfif',  color:'yellow',quantity:5 },quantity:1 },
// {id: 2,product: {id: 2,name:'sam', gender:'Male', price:500,currency:'$',image:'C:\\fakepath\\white t-shirt.jfif',  color:'grey',quantity:5 },quantity:1 },
// {id: 3,product: {id: 3,name:'alam', gender:'Male', price:300,currency:'$',image:'C:\\fakepath\\green t-shirt.jfif',  color:'yellow',quantity:5 },quantity:1 },
// {id: 4,product: {id: 4,name:'sam', gender:'Male', price:500,currency:'$',image:'C:\\fakepath\\white t-shirt.jfif',  color:'grey',quantity:5 },quantity:1 }, 
// {id: 5,product: {id: 5,name:'alam', gender:'Male', price:300,currency:'$',image:'C:\\fakepath\\green t-shirt.jfif',  color:'yellow',quantity:5 },quantity:1 },
// {id: 6,product: {id: 6,name:'sam', gender:'Male', price:500,currency:'$',image:'C:\\fakepath\\white t-shirt.jfif',  color:'grey',quantity:5 },quantity:1 },



//src\assets\images\grey T-shirt.jfif