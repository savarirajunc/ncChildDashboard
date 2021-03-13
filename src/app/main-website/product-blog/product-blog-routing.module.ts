import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductBlogComponent } from './product-blog.component';

const routes: Routes = [{
    path:'',
    component: ProductBlogComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductBlogRoutingModule { }
