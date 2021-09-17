import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  public tab:any="1";
  public dom: any;
  constructor() { }

  ngOnInit(): void {
  }

}
