import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CONSTANTS } from '../../app.constants';
import { Title } from '@angular/platform-browser';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-stories-view',
  templateUrl: './stories-view.component.html',
  styleUrls: ['./stories-view.component.css']
})
export class StoriesViewComponent implements OnInit {

  storiesUrl: SafeResourceUrl;
  pagetite;
  constructor(public domSanitizer:DomSanitizer,private title:Title,private activatedRoute:ActivatedRoute) { }

  ngOnInit() { window.scrollTo(0, 0);
//localStorage.setItem('search','faqs');
   // this.title.setTitle(CONSTANTS.PAGETITLE.FAQS);
   this.pagetite = this.activatedRoute.snapshot.params.id;
    this.storiesUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://stories.nidarachildren.com/'+this.pagetite);
    function resizeIframe(obj) {
      obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
    }
  }

  ngOnDestroy() {

    //this.subscription.unsubscribe();
  }

}
