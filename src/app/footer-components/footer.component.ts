import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
declare var $: any;
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router'; //import router module for subscribeThank page

interface MailChimpResponse  {
  result: string;
  msg: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  email;
  name;
  submitted = false;
	mailChimpEndpoint = 'https://nidarachildren.us17.list-manage.com/subscribe/post-json?u=e2c0982dd8b7d1a16f74d886d&id=fae67dd82a&c=ng_jsonp_callback_0';
  error = '';

  constructor( private http: HttpClient,  private router:Router ) { }

  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nameControl = new FormControl('', [
    Validators.required
]);

  ngOnInit() { window.scrollTo(0, 0);
  }
  ngOnDestroy() {
    window.scrollTo(0, 0);
  }
  onSubmit() {
    this.error = '';
    if (this.emailControl.status === 'VALID') {

      const params = new HttpParams()
      .set('MERGE1', 'Nidarachildren')
      .set('MERGE0', this.emailControl.value)
      .set('u', 'e2c0982dd8b7d1a16f74d886d') // hidden input name
      .set('id', 'fae67dd82a');
      const mailChimpUrl = this.mailChimpEndpoint + params.toString();

      // 'c' refers to the jsonp callback param key. This is specific to Mailchimp
      this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(response => {
        if (response.result && response.result !== 'error') {
          this.submitted = true;
          this.pageRouter();
        } else {
          this.error = response.msg;
        }
      }, error => {
        console.error(error);
        this.error = 'Sorry, an error occurred.';
      });
    }
  }
   pageRouter(){
    this.router.navigate(['thank']);  //go to subscriber thank page.
   }



}
