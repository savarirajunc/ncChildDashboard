import { CONSTANTS } from '../../app.constants';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  key;
  paymentUrl: SafeResourceUrl;
  access_code;
  constructor(private activatedRoute: ActivatedRoute,  public domSanitizer:DomSanitizer) { }

  ngOnInit() { window.scrollTo(0, 0);
    this.key = this.activatedRoute.snapshot.params.id;
    this.access_code = CONSTANTS.PAYMENT.ACCESSCODE;
    // tslint:disable-next-line:max-line-length
    this.paymentUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction&encRequest='+this.key+'&access_code='+this.access_code+'');
  }

}
