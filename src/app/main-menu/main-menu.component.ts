import { Component, OnInit, OnDestroy } from '@angular/core';
//import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router, RouterModule, ActivatedRoute, Params } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit,OnDestroy {

  constructor( private router: Router) { }

  ngOnInit() { window.scrollTo(0, 0);
    //this.spinnerService.show();
    $(document).ready(function() {

      $(".colse-main").click(function(event) {

               if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible") ) {
                  $('.navbar-collapse').collapse('toggle');
              }
        });

      });

  }
  pageLoad(cat) {
    this.router.navigate(['product/',cat]);
  }

  ngOnDestroy(){
    location.reload();
  }
}
