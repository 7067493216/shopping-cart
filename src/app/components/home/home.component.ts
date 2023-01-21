import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  public homeForm!:FormGroup;



  constructor(
    private routing: Router,
  ){

  }

  ngOnInIt():void {

  }


  onAdmin(e:any){
    this.routing.navigate(['/addProduct']);

  }

  onUser(t:any){
    this.routing.navigate(['/view']);

  }

}

