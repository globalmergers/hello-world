import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-buyer',
  templateUrl: './find-buyer.component.html',
  styleUrls: ['./find-buyer.component.scss']
})
export class FindBuyerComponent implements OnInit {
  isOk = false;
  constructor() { }

  ngOnInit(): void {
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
