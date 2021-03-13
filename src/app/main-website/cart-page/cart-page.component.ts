import { SharedService } from './../../service/shared.service';
import { MainWebsiteService } from '../main-website.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

declare var $: any;

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit, OnDestroy {
  productList:any = [];
  productItem:any = [];
  filterItem:any = [];
  confirmed = false;
  mission;
  addService;
  announced = false;
  subscription: Subscription;
  top_meg;
  grade;
  constructor(private mainWebSiteService: MainWebsiteService, private sharedService: SharedService) {
    this.mainWebSiteService.getGradeInfo().subscribe(response =>{
      this.grade = response.data;
    });
    this.subscription = sharedService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;

        this.announced = true;
        this.confirmed = false;
      });

      this.subscription = sharedService.addmissService$.subscribe(
        addService => {
          this.addService = addService;
          console.log(addService);
        }
      );

      sharedService.updatemissionService$.subscribe(updateService =>{

     //   this.getChildrenInfo();
     this.sharedService.confirmMission(this.mission);
      })


      sharedService.updateDatamissionService$.subscribe(updateDataService=>{

        this.getProductList();
      });
   }

  ngOnInit() { window.scrollTo(0, 0);
    this.getProductList();
  }
  getProductList(): void {
    this.productItem = localStorage.getItem('sessionId');
    this.mainWebSiteService.productGetById({'session_id': this.productItem,'user_id':localStorage.getItem('user_id')}).subscribe(response => {
        this.productList = response.data;
        this.filterItem = this.productList.length;
        this.sharedService.confirmMission(this.mission);
        this.top_meg = 'ITEM HAS BEEN ADDED TO YOUR BAG';
        if (this.filterItem === 0) {

        }
        else {

        }
    });
  }
  deleteFunction(id): void{
    this.mainWebSiteService.deleteCartPoroduct({'session_id':localStorage.getItem('sessionId'),'user_id':localStorage.getItem('user_id'),'id':id}).subscribe(response =>{
      console.log(response);
      this.mainWebSiteService.productGetById({'session_id': this.productItem,'user_id':localStorage.getItem('user_id')}).subscribe(response => {
        this.productList = response.data;
        this.filterItem = this.productList.length;
        this.sharedService.confirmMission(this.mission);
        this.top_meg = 'ITEM HAS BEEN REMOVED FROM YOUR BAG';
        if (this.filterItem === 0) {

        }
        else {

        }
    });
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
