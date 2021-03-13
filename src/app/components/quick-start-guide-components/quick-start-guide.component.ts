import { Component, OnInit,ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppService } from './../../app.service';
import { ComponentsService } from './../../service/components.service';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { AuthenService } from './../../service/authen.service';
import { CONSTANTS } from './../../app.constants';
import { SharedService } from './../../service/shared.service';
@Component({
  selector: 'app-quick-start-guide',
  templateUrl: './quick-start-guide.component.html',
  styleUrls: ['./quick-start-guide.component.css']
})


export class QuickStartGuideComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: any;
// alert initilaze
private _response: Object = { "status": false, "message": "" };

  // Two-way Binding Initilaze
  private formData: Object = {}; // ngModel formData Objects intiliaze

  // sharedService Initilaze
  private addServiceInit: boolean = false;
  private addService;
  private updateService;
  private addChild: boolean = false;
  private addCareinfo: boolean = false;
  public videoSource;
  constructor(private router: Router, private titleService: Title, private sharedService: SharedService, private authenService: AuthenService, private appService: AppService, private componentsService: ComponentsService) {
    sharedService.missionConfirmed$.subscribe(
      astronaut => {
        this.addServiceInit = false;

      //  this.getDailyRoutineByID();

      });

    sharedService.addmissService$.subscribe(addService => {


      this.formData = {};
      this.addServiceInit = true;
    });

    sharedService.updatemissionService$.subscribe(updateService => {
      this.updateService = updateService;
    });
   }

  ngOnInit() { window.scrollTo(0, 0);
    this.titleService.setTitle(CONSTANTS.PAGETITLE.QUICKSTARTGUIDE);

    this.authenService.checkToken(localStorage.getItem('token')).subscribe(response => {
      this.appService.debugConsole({ "tokenCheckig": response });

      if (response.status) {

      //  this.getDailyRoutineByID();

      } else {
        localStorage.clear();
        this.router.navigate(['/signin']);

      }
    });
      this.videoSource = "/assets/video/1.mp4";
        this.videoplayer.nativeElement.play();
  }

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
}
close(){
  this.router.navigate(['/dashboard']);
}


}
