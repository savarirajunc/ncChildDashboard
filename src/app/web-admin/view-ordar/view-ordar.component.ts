import { Component, OnInit } from '@angular/core';
import { WebAdminService } from '../web-admin.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-ordar',
  templateUrl: './view-ordar.component.html',
  styleUrls: ['./view-ordar.component.css']
})
export class ViewOrdarComponent implements OnInit {
  orderId;
  public orders: any = [];

  constructor(private activatedRoute:ActivatedRoute, private webAdminService: WebAdminService) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.orderId =  this.activatedRoute.snapshot.params.id;
    this.webAdminService.orderGetById({ 'id' : this.orderId}).subscribe(response =>{
      console.log(response);
      this.orders = response.data;
    });
  }

}
