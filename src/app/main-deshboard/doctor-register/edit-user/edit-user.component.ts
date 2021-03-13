import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../../../service/authen.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { DashboardService } from '../../dashboard.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  public  _response: any = { 'status': false, 'alert': 'info', 'message': '' };
  private user_id;
  public userInfo;
  public userquliinfo;
  public hospitalinfo;
  public clinicinfo;
  h_from_time;
  h_to_time;
  c_from_time;
  c_to_time;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private doctorRegisterService: DashboardService) { }

  ngOnInit() {
    this.user_id = this.activatedRoute.snapshot.params.id;
    this.doctorRegisterService.getUserInfoById({'id': this.user_id}).subscribe(response => {
      console.log(response);
      this.userInfo = response.data;
      this.userquliinfo = response.user_info;
      this.hospitalinfo = response.hospital_info;
      const setfrom_itme = response.hospital_info[0].practicing_time.split(':');
      const setfrom_set_time = new Date();
      setfrom_set_time.setHours(setfrom_itme[0]);
      setfrom_set_time.setMinutes(setfrom_itme[1]);
      this.h_from_time = setfrom_set_time;
      const setto_itme = response.hospital_info[0].practicing_time_to.split(':');
      const setto_set_time = new Date();
      setto_set_time.setHours(setto_itme[0]);
      setto_set_time.setMinutes(setto_itme[1]);
      this.h_to_time = setto_set_time;

      this.clinicinfo = response.clinic_info;

      const c_setfrom_itme = response.clinic_info[0].practicing_time.split(':');
      const c_setfrom_set_time = new Date();
      c_setfrom_set_time.setHours(c_setfrom_itme[0]);
      c_setfrom_set_time.setMinutes(c_setfrom_itme[1]);
      this.c_from_time = c_setfrom_set_time;
      const c_setto_itme = response.clinic_info[0].practicing_time_to.split(':');
      const c_setto_set_time = new Date();
      c_setto_set_time.setHours(c_setto_itme[0]);
      c_setto_set_time.setMinutes(c_setto_itme[1]);
      this.c_to_time = c_setto_set_time;
    });
  }

  onSubmit() {
    const fromtime = this.h_from_time;
    const totime = this.h_to_time;
    const h_fromtime = fromtime.getHours();
    const h_totime = fromtime.getMinutes();
    const h_to_fromtime = totime.getHours();
    const h_to_totime = totime.getMinutes();

    const cfromtime = this.c_from_time;
    const ctotime = this.c_to_time;
    const c_fromtime = cfromtime.getHours();
    const c_totime = cfromtime.getMinutes();
    const c_to_fromtime = ctotime.getHours();
    const c_to_totime = ctotime.getMinutes();


    this.clinicinfo[0].clinictype = 'clinic';
    this.hospitalinfo[0].fromtime = h_fromtime + ':' + h_totime;
    this.hospitalinfo[0].totime = h_to_fromtime + ':' + h_to_totime;

    this.clinicinfo[0].fromtime = c_fromtime + ':' + c_totime;
    this.clinicinfo[0].totime = c_to_fromtime + ':' + c_to_totime;
    this.userquliinfo[0].user_id = this.userInfo[0].id;


    this.doctorRegisterService.addHospitalAddress(this.hospitalinfo[0]).subscribe(response => {

    });
    this.doctorRegisterService.addHospitalAddress(this.clinicinfo[0]).subscribe(response => {

    });
    this.doctorRegisterService.saveDoctorInfo(this.userquliinfo[0]).subscribe(res => {

    });
    this.doctorRegisterService.userUpate(this.userInfo[0]).subscribe(res => {
     if (res.status) {
      this._response['status'] = true;
      this._response['message'] = 'Your edits were saved successfully.';
      this._response['alert'] = 'alert alert-success';
      setTimeout(() => {
        this.router.navigate(['/admin-dashboard/doctor-registration']);
      }, 1000);
     }
    });
  }

}
