
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { MainWebsiteComponent } from './main-website.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  {
  path: '',
  component: MainWebsiteComponent,
  // children:[{
  //   path: '',
  //   component: MainPageComponent
  // }
//]
},


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class MainWepsiteRoutingModule { }
