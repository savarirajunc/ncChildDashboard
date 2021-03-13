import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-healthcar-video',
  templateUrl: './healthcar-video.component.html',
  styleUrls: ['./healthcar-video.component.css']
})
export class HealthcarVideoComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: any;
  public videoSource;
  constructor(private router: Router) { }

  ngOnInit() {
    this.videoSource = "/assets/video/2.mp4";
    this.videoplayer.nativeElement.play();
  }

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
}
close(){
  this.router.navigate(['/healthcare-providers']);
}

}
