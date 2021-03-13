import { MainWebsiteService } from './../main-website.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';
import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { SharedService } from '../../service/shared.service';
import { error } from 'util';




@Component({
  selector: 'app-product-blog',
  templateUrl: './product-blog.component.html',
  styleUrls: ['./product-blog.component.css']
})
export class ProductBlogComponent implements OnInit,OnDestroy {

   formData:any =[];
// public order:any={};
  // searchValu;
  conteData:any = [];
  guidData:any = [];
  arr: any = [];
  linkData:any = [];

  faqconteData:any = [];
  faqguidData:any = [];
  faqarr: any = [];
  faqlinkData:any = [];
  faqresults;

  storyconteData:any = [];
  storyguidData:any = [];
  storyarr: any = [];
  storylinkData:any = [];
  storyresults;

  inputData;
  results;
  product:any=[];
  productLength;
  private previousUrl: string = undefined;
  private currentUrl: string = undefined;
  constructor(private sharedservice:SharedService, private router:Router, private mainWebsiteService:MainWebsiteService, private activatedRoute:ActivatedRoute, private http:HttpClient) {
    console.log("contstr");
       sharedservice.searchSubject$.subscribe( key =>{
         console.log(key)
         this.formData = key;
         console.log(this.formData)
       })

       this.currentUrl = this.router.url;
       router.events.subscribe(event => {
         if (event instanceof NavigationEnd) {
           this.previousUrl = this.currentUrl;
           this.currentUrl = event.url;
         };
       });

  }

  ngOnInit():void {
    this.inputData = this.activatedRoute.snapshot.params.data;
    console.log(this.inputData);
    console.log("https://blog.nidarachildren.com/wp-json/wp/v2/posts?search=" + this.inputData);

    this.http.get("https://blog.nidarachildren.com/wp-json/wp/v2/posts?search=" + this.inputData,{}).subscribe((res) => {
      this.arr =  res;
      console.log(this.arr);
      this.results = this.arr.length;
      for(let i=0; i < this.arr.length; i++ ){
        this.conteData.push(this.arr[i].content);
        this.guidData.push(this.arr[i].excerpt);
        this.linkData.push(this.arr[i]._links);
        // console.log(this.guidData)
      }
      console.log(this.linkData)
      });

      this.http.get("https://secure.ccavenue.com/transaction/transaction.do?command=getJsonData&access_code=AVDN79FG25BL74NDLB&currency=INR&amount=12950",{}).subscribe((res) => {
        this.arr =  res;
        console.log(this.arr);
        // this.results = this.arr.length;
        // for(let i=0; i < this.arr.length; i++ ){
        //   this.conteData.push(this.arr[i].content);
        //   this.guidData.push(this.arr[i].excerpt);
        //   this.linkData.push(this.arr[i]._links);
        //   // console.log(this.guidData)
        // }
        // console.log(this.linkData)
       },
       (error)=>{
        console.log(error);
       });


      this.http.get("https://faq.nidarachildren.com/wp-json/wp/v2/posts?search=" + this.inputData,{}).subscribe((res) => {
        this.faqarr =  res;
      this.faqresults = this.faqarr.length;
      for(let i=0; i < this.faqarr.length; i++ ){
        this.faqconteData.push(this.faqarr[i].content);
        this.faqguidData.push(this.faqarr[i].excerpt);
        this.faqlinkData.push(this.faqarr[i]._links);
        // console.log(this.guidData)
      }
      console.log(this.linkData)
      });
      this.http.get("https://stories.nidarachildren.com/wp-json/wp/v2/posts?search=" + this.inputData,{}).subscribe((res) => {
        this.storyarr =  res;
      this.storyresults = this.storyarr.length;
      for(let i=0; i < this.storyarr.length; i++ ){
        this.storyconteData.push(this.storyarr[i].content);
        this.storyguidData.push(this.storyarr[i].excerpt);
        this.storylinkData.push(this.storyarr[i]._links);
        // console.log(this.guidData)
      }
      console.log(this.linkData)
      });
      this.mainWebsiteService.productSearch({'searchitem':this.inputData}).subscribe(response=>{
        if(response.status){
          this.product = response.data;
        }
        else{
          this.productLength = 0;
        }
      })
    }


  ngOnDestroy() {

  }
}
