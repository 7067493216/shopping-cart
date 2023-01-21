import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './components/add-product/add-product.component';
// import { NgSelectModule } from '@ng-select/ng-select';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { ApiService } from './services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';

 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    CartComponent,
    HomeComponent,
    AddProductComponent,
    ProductViewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    // NgModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
     NgSelectModule,
    RouterModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    Ng2SearchPipeModule,
  
   
    
    
  ],
  exports: [HeaderComponent],
  providers: [ApiService,AddProductComponent],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
