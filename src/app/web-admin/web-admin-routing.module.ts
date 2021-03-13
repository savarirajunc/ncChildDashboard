
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { WebAdminComponent } from './web-admin.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CreateNewCouponsComponent } from './create-new-coupons/create-new-coupons.component';
import { ViewCouponsComponent } from './view-coupons/view-coupons.component';
import { EditCouponsComponent } from './edit-coupons/edit-coupons.component';
import { ViewOrdarComponent } from './view-ordar/view-ordar.component';
import { OrdarListComponent } from './ordar-list/ordar-list.component';

const routes: Routes = [
  {
    path: '',
    component: WebAdminComponent,
    children: [
      {
        path: '',
        component: ViewProductComponent
      },
      {
        path: 'view-product',
        component: ViewProductComponent
      },
      {
        path: 'edit-product/:id',
        component:EditProductComponent
      },
      {
      path: 'add-product',
      component: NewProductComponent
    },
    {
      path: 'add-new-coupon',
      component: CreateNewCouponsComponent
    },
    {
      path: 'view-coupons',
      component: ViewCouponsComponent
    },
    {
      path: 'edit-coupons/:id',
      component: EditCouponsComponent
    },
    {
      path: 'view-ordar/:id',
      component:ViewOrdarComponent
    },
    {
      path: 'Orders',
      component: OrdarListComponent
    }
  ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class WebAdminRoutingModule { }
