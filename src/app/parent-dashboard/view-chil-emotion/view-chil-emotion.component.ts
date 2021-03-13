import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CONSTANTS, Router,Title, AppService, AuthenService, ParentsService } from './../../app.index';
@Component({
  selector: 'app-view-chil-emotion',
  templateUrl: './view-chil-emotion.component.html',
  styleUrls: ['./view-chil-emotion.component.css']
})
export class ViewChilEmotionComponent implements OnInit {
  kid_id;
  start_end;
  getValue:any =[];
  constructor(private activatedRoute:ActivatedRoute, private parentsService:ParentsService) { }

  ngOnInit() {
    this.kid_id = localStorage.getItem('selectedKid');
    this.start_end = this.activatedRoute.snapshot.params.id;
    this.parentsService.getDailystartendByid({'nidara_kid_profile_id':this.kid_id,'start_end':this.start_end}).subscribe(res =>{
      this.getValue = res.data;
    })
  }

}
