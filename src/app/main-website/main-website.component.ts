import { MainWebsiteService } from './main-website.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CONSTANTS } from './../app.constants';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import {Location} from '@angular/common';


declare var $: any;

interface MailChimpResponse {
  result: string;
  msg: string;
}


@Component({
  selector: 'app-main-website',
  templateUrl: './main-website.component.html',
  styleUrls: ['./main-website.component.css']
})
export class MainWebsiteComponent implements OnInit {

  @ViewChild('parentModal') parentModal;

  email;
  name;
  submitted = false;
  mailChimpEndpoint = 'https://nidarachildren.us17.list-manage.com/subscribe/post-json?u=e2c0982dd8b7d1a16f74d886d&id=fae67dd82a&c=ng_jsonp_callback_0';
  error = '';

  constructor( private title: Title, private mainWebsiteService: MainWebsiteService, private http: HttpClient, private router: Router, private location: Location  ) { }

  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nameControl = new FormControl('', [
    Validators.required
]);

  ngOnInit() { window.scrollTo(0, 0);
    this.title.setTitle(CONSTANTS.PAGETITLE.HOME);
    let sessionId =   localStorage.getItem('sessionId');
    if(!sessionId){
      this.mainWebsiteService.getSesstionId(localStorage.getItem('token')).subscribe(response => {
        localStorage.setItem('sessionId', response.data);
      });
    }
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
  });
  const load = setTimeout(() => {
    location.reload();
  }, 100, );
  clearTimeout(load);


    if (localStorage.getItem('cookies') === 'accsped') {
      $('#cookie-notice').css('display', 'none' );
    }
    $(window).scroll(function() {

      if ($(window).scrollTop() > 2000) {
        if (localStorage.getItem('sub_cookis') !== 'true') {
          $('#bsmodal').css('display', 'block');
      }
      }
    });

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.parentModal.hide();
    this.parentModal.config = { backdrop: true, focus: true, ignoreBackdropClick: true, keyboard: false, show: false };

    $('.close').click(function () {
      $('#bsmodal').slideDown('slow').css('display', 'none');
    });
  }
  moduleClose() {
    localStorage.setItem('sub_cookis', 'true');
    this.parentModal.hide();
  }


  onSubmit() {
  this.error = '';
  if (this.emailControl.status === 'VALID' && this.nameControl.status === 'VALID') {

    const params = new HttpParams()
      .set('MERGE1', this.nameControl.value)
      .set('MERGE0', this.emailControl.value)
      .set('u', 'e2c0982dd8b7d1a16f74d886d') // hidden input name
      .set('id', 'fae67dd82a');
    const mailChimpUrl = this.mailChimpEndpoint + params.toString();

    // 'c' refers to the jsonp callback param key. This is specific to Mailchimp
    this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(response => {
      if (response.result && response.result !== 'error') {
        this.submitted = true;
        this.pageRouting();
        localStorage.setItem('sub_cookis', 'true');
        $('#bsmodal').slideDown('slow').css('display', 'none');

      } else {
        this.error = response.msg;
      }
    }, error => {
      console.error(error);
      this.error = 'Sorry, an error occurred.';
    });
  }
  $(window).scroll(function() {
    if ($(window).scrollTop() > 2000) {
      if (localStorage.getItem('sub_cookis') !== 'true') {
      $('#myModal').modal({
        backdrop: 'static'
      });
    }
    }
  });
  this.mainWebsiteService.getClientIp().subscribe(response => {
    localStorage.setItem('country_code', response.data[0].country_code);
  });


}

pageRouting() {
  this.router.navigate(['thank']);
}

  descoverNidara() {
    // el.scrollIntoView();
    $('html,body').animate({
      scrollTop: $('#explore').offset().top},
      'slow');
  }

  dismiss(): void {

  }

  cookieSave() {
    localStorage.setItem('cookies', 'accsped');
    $('#cookie-notice').css('display', 'none' );
  }



  pageLoardDoen() {
    $('html,body').animate({
      scrollTop: $( '#downsection' ).offset().top},
      'slow');
  }



}
