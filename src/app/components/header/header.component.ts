import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Cart } from 'src/app/services/cart.interface';
import { User } from 'src/app/services/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {



  constructor(
    private routing: Router,
    private _apiService: ApiService,

  ){

  }
  ngOnIt():void {

  }
  onSubmitHome(e:any){
    this.routing.navigate(['/']);

  }

  backTocart(){
    this.routing.navigate(['/cart']);
  }


}
