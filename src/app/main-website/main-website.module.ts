
import { BlogproduserService } from './blogproduser.service';
import { MainWebsiteService } from './main-website.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainWepsiteRoutingModule } from './main-wepsite-routing.module';
import { MainWebsiteComponent } from './main-website.component';
import { WebFooterComponent } from './../footer.component/web-footer/web-footer.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NcBreadcreumbsComponent } from './nc-breadcreumbs/nc-breadcreumbs.component';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DirectiveModule } from '../directives/directive-module.module';

import { ConvhtmlPipe } from './convhtml.pipe';
// import { CartPageComponent } from './cart-page/cart-page.component';

import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import {JsonpModule, Jsonp, Response} from '@angular/http';
//import { GirlboyFooterComponent } from './girlboy-footer/girlboy-footer.component';



@NgModule({
  imports: [
    CommonModule,
    MainWepsiteRoutingModule,
    HttpClientModule,
    JsonpModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    DirectiveModule,
    ModalModule.forRoot(),
   // Ng4LoadingSpinnerModule.forRoot(),
    Ng4GeoautocompleteModule.forRoot()
  ],
  declarations: [
    MainWebsiteComponent,
    WebFooterComponent,
    FooterComponent,
    MainPageComponent,
    NcBreadcreumbsComponent,
   // GirlboyFooterComponent,
    // YouTubeComponent,


    ConvhtmlPipe,
    // CartPageComponent,
  ],
  providers:[MainWebsiteService, BlogproduserService]
})
export class MainWebsiteModule { }
