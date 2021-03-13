
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveModule } from '../directives/directive-module.module'
import { WebAdminComponent } from './web-admin.component';
import { WebAdminRoutingModule } from './web-admin-routing.module';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { NewProductComponent } from './new-product/new-product.component';
import { CKEditorModule } from 'ngx-ckeditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebAdminService } from './web-admin.service';
import { Http, HttpModule, Response, Headers, RequestOptions, ConnectionBackend } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CreateNewCouponsComponent } from './create-new-coupons/create-new-coupons.component';
import { ViewCouponsComponent } from './view-coupons/view-coupons.component';
import { EditCouponsComponent } from './edit-coupons/edit-coupons.component';
import { ViewOrdarComponent } from './view-ordar/view-ordar.component';
import { OrdarListComponent } from './ordar-list/ordar-list.component';
@NgModule({
  imports: [
    CommonModule,
    WebAdminRoutingModule,
    DirectiveModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [WebAdminComponent, AdminMenuComponent, NewProductComponent, ViewProductComponent, EditProductComponent, CreateNewCouponsComponent, ViewCouponsComponent, EditCouponsComponent, ViewOrdarComponent, OrdarListComponent],
  providers: [WebAdminService]
})
export class WebAdminModule { }
