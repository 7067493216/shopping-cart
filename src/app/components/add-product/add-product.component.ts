import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
// import { NgOptimizedImage } from '@angular/common'
import { User } from '../../services/user.interface';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class AddProductComponent {

  public submitted = false;
  public attachment: any;
  public formAccess: any;
  public Id: number = 0;
  public productt:any;
  public AdminProduct:User[] = [];
  lengthhh:number = 0;
  // public product = { id: 0, name: "", gender: "", price: 0, currency: "", image: "", quantity: 0, color: "" }

 

  constructor(
    private routing: Router,
    //private fb: FormBuilder,
    private _apiService: ApiService,
    //private localStorage: StorageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
   
    //  this._apiService.getAllProduct('products').subscribe((data:any)=>{
    //   this.lengthhh = data.length;
    // })

    this.activatedRoute.params.subscribe((param: { [x: string]: number; }) => {
      //  console.log(param["id"],param);
      this.Id = param["id"];
    })
     console.log("id---",this.Id);
    if (this.Id >= -1) {
     this._apiService.getProductById(this.Id,'products').subscribe((data: any)=>{
//console.log(data,"datatattatatatatattatttatta");
this.productt = data;

 // console.log(this.productt);
 this.addProductForm.controls["id"].setValue(this.productt.id);
 this.addProductForm.controls["name"].setValue(this.productt.name);
 this.addProductForm.controls["color"].setValue(this.productt.color);
 this.addProductForm.controls["currency"].setValue(this.productt.currency);
 this.addProductForm.controls["quantity"].setValue(this.productt.quantity);
 this.addProductForm.controls["gender"].setValue(this.productt.gender);
 this.addProductForm.controls["price"].setValue(this.productt.price);
 //this.addProductForm.controls["image"].setValue(this.product.image); 

     })
          
    }
  }


  public addProductForm: FormGroup = new FormGroup({
    id:new FormControl(7),
    name: new FormControl('', Validators.required),  //
    gender: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    currency: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    // quality: new FormControl('',Validators.required),
    color: new FormControl('', Validators.required),
    //id: new FormControl(''),
    quantity: new FormControl('', Validators.required)
  })
  get v() {
    return this.addProductForm.controls;
  }

  goToTheProductListeningPage(e: any) {
    this.routing.navigate(['/list']);
  }

  onReset() {
    this.addProductForm.reset();
  }

  onFileUpload(event: any) {
    this.attachment = event.target.files[0];
  }


//   getAllProductItems(){
// this._apiService.getAllProduct('products').subscribe((data:any)=>{
//   console.log(data,"jejfjebdjkdhwvdjkwdujhwjdnmjwdkkkkkkkkkkkkkkkkkk....................");
  
// })
  //}

  onSubmit() {
    //    console.log("hhiiii");
    this.submitted = true;
    if (this.addProductForm.invalid) {
      //      console.log("wrong");
      return
    }
    //   console.log(this.addProductForm.value);
    let formValue = this.addProductForm.value;
    let formData: FormData = new FormData();
    formData.append('FILE', this.attachment);
    formData.append('DATA', JSON.stringify(formValue));
    //    console.log("number",this.Id);
    if (this.Id == null) {
      //      console.log("addproduct",formValue);
      this._apiService.addProduct(formValue).subscribe((res:any)=>{
        console.log(res,".............................");
          // this._apiService.getAllProduct('products').subscribe((y:any)=>{
          //   console.log(y,"yyyyyyyyyyyyyyyyyyyyyyyyyyyy");
            
          // })
          
          
      });
      this._apiService.addProduct(formValue).subscribe((res:any)=>{
        console.log(res,".............................");
          // this._apiService.getAllProduct('products').subscribe((y:any)=>{
          //   console.log(y,"yyyyyyyyyyyyyyyyyyyyyyyyyyyy");
            
          // })
          
          
      });
      this.addProductForm.reset();
      this.routing.navigate(['/list']);
     
    } else {
      //      console.log(this.addProductForm.value,"foormmmvalue");
      this._apiService.updateProduct(this.addProductForm.value).subscribe((data:any)=>{

      })
      this.addProductForm.reset();
      this.routing.navigate(['/list']);
    }
  }
}