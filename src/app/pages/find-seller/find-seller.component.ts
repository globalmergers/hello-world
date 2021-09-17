import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var selectpicker:any;

@Component({
  selector: 'app-find-seller',
  templateUrl: './find-seller.component.html',
  styleUrls: ['./find-seller.component.scss']
})
export class FindSellerComponent implements OnInit {
  isOk = false;
  constructor() { }

  ngOnInit(): void {
    // $('select').selectpicker();
  }

  getemailvalidate(e: any) {
    // Regular Expression (Not accepts second @ symbol
    // before the @gmail.com and accepts everything else)
    var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Converting the email to lowercase
    let val = regexp.test(String(e.target.value).toLowerCase());
    if(val == true) {
      this.isOk = true;
    }else {
      this.isOk = false;
    }
  }

}
