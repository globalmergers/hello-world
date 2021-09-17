import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-austria',
  templateUrl: './country-austria.component.html',
  styleUrls: ['./country-austria.component.scss']
})
export class CountryAustriaComponent implements OnInit {
  public tab:any="1";
  public dom: any;
  constructor() { }

  ngOnInit(): void {
  }

}
