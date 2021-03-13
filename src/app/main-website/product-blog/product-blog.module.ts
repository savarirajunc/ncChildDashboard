import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductBlogRoutingModule } from './product-blog-routing.module';
import { ProductBlogComponent } from './product-blog.component';

@NgModule({
  imports: [
    CommonModule,
    ProductBlogRoutingModule
  ],
  declarations: [
    ProductBlogComponent
  ]
})
export class ProductBlogModule { }
