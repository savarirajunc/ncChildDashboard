import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CONSTANTS, Router, Title, AppService, AuthenService, ParentsService } from '../../../../app.index';
import { DoctorDashboardService } from '../../../doctor-dashboard.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  private standard_id;
  private indicator_id;
  game_info;
  constructor(private activatedRoute: ActivatedRoute, private parentsService: ParentsService, private doctorDashboardService: DoctorDashboardService){ }

  ngOnInit() {
    this.standard_id = this.activatedRoute.snapshot.params.id;
    this.indicator_id = this.activatedRoute.snapshot.params.ind;
    this.doctorDashboardService.getSchoolgameresult({'nidara_kid_profile_id': localStorage.getItem('kid_id'), 'visit_no': localStorage.getItem('visit_no'),'standard_ids':this.standard_id,'indicator_id':this.indicator_id}).subscribe(response =>{
      this.game_info = response.data;
    });
  }

}
