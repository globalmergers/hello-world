import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Globalmergers';

  ngOnInit(): void {
    var header:any = document.getElementById('header');
    var headerMobile:any = document.getElementById('mobile');
    window.onscroll = function () {
      "use strict";
      if (document.documentElement.scrollTop >= 20) {
        header.className = 'navbar navbar-expand-lg navbar-light z-index header-colored';
        headerMobile.className = 'mobile mobileview shadow-sm header-colored z-index';
      }
      else {
        header.className = 'navbar navbar-expand-lg navbar-light back-white z-index';
        headerMobile.className = 'mobile mobileview shadow-sm back-white z-index';
      }
    };
  }
  onActivate() {
    window.scroll(0,0);
   
}
}
