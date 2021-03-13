import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'nidara-general-header',
  templateUrl: './general-header.component.html',
  styleUrls: ['./general-header.component.css']
})
export class GeneralHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { window.scrollTo(0, 0);
    $("#started3").click(function(){
      $("#get-started").css("display", "none");
      $("#get-started2").css("display", "block");
      $("html, body").animate({ scrollTop: 150 }, "slow");
    });
  }

}
