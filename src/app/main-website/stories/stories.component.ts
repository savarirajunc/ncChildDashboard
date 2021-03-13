import { SharedService } from './../../service/shared.service';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CONSTANTS } from '../../app.constants';
import { Title } from '@angular/platform-browser';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit, OnDestroy {
  storiesUrl: SafeResourceUrl;
  constructor(public domSanitizer:DomSanitizer,private sharedService:SharedService, private title:Title, private router: Router) { }

  ngOnInit() { window.scrollTo(0, 0);
    localStorage.setItem('search','stories');
    this.title.setTitle(CONSTANTS.PAGETITLE.STORIES);
    this.storiesUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://stories.nidarachildren.com/stories/');
    function resizeIframe(obj) {
      obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
    }
  }

  ngOnDestroy() {
    if(this.router.url == 'search/:id'){
      localStorage.setItem('search','stories');
    }
    else{
      localStorage.setItem('search','blog');
    }
    // localStorage.setItem('search','blog');
    //this.subscription.unsubscribe();
  }


}
