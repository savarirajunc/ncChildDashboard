import { NgModule } from '@angular/core';
import { NotFoundPageComponent } from './not-found-page.component';
import { NotFoundPageRoutingModule } from './not-found-page-routing.module';
import { FormsModule,CommonModule,AppService,ComponentsService } from './../components.index';

@NgModule({
  imports: [
    NotFoundPageRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [NotFoundPageComponent]
})
export class NotFoundPageModule { }
