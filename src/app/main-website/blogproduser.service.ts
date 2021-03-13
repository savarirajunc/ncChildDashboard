import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {AppService} from "../app.service";
import { Subject }    from 'rxjs/Subject';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/Map';


@Injectable()
export class BlogproduserService {
arr: any= [];
private Url= 'assets/productJson/product.json';

searchSubject = new Subject<string>();
searcObs$ = this.searchSubject.asObservable();

  constructor(private appService:AppService, private http: Http) { }
    getHerbs () {
     return this.http.get(this.Url)
       .map((response: Response) => response.json());
   }

   goSearch(input){
     console.log(input);

   }

}
