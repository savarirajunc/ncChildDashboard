import { Component, OnInit, OnDestroy } from '@angular/core';
import { CONSTANTS } from '../../app.constants';
import { Title } from '@angular/platform-browser';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit, OnDestroy {

  storiesUrl: SafeResourceUrl;
  constructor(public domSanitizer:DomSanitizer,private title:Title) { }

  ngOnInit() { window.scrollTo(0, 0);
    localStorage.setItem('search','faqs');
    this.title.setTitle(CONSTANTS.PAGETITLE.FAQS);
    this.storiesUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://faq.nidarachildren.com/faqs/');
    function resizeIframe(obj) {
      obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
    }
  }

  ngOnDestroy() {

    //this.subscription.unsubscribe();
  }

}
