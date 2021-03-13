import { Component, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Location} from '@angular/common';

@Component({
  selector: 'app-you-tube',
  templateUrl: './you-tube.component.html',
  styleUrls: ['./you-tube.component.css']
})
export class YouTubeComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: any;
  public youtubeUrl: SafeResourceUrl;
  public videoSource;
  constructor( public domSanitizer: DomSanitizer, private location: Location) {
    // tslint:disable-next-line:max-line-length
    this.youtubeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl( 'https://www.youtube.com/embed/3q26KolSHSU?modestbranding=1&rel=0&controls=1&showinfo=0&html5=1&autoplay=1&fs=1&autohide=1' );
  }

  ngOnInit() { window.scrollTo(0, 0);

    this.videoSource = '/assets/video/3.mp4';
    this.videoplayer.nativeElement.play();
}

toggleVideo(event: any) {
  this.videoplayer.nativeElement.play();
}
close(){
  this.location.back();
}

}
