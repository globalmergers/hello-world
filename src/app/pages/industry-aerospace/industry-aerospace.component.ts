import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industry-aerospace',
  templateUrl: './industry-aerospace.component.html',
  styleUrls: ['./industry-aerospace.component.scss']
})
export class IndustryAerospaceComponent implements OnInit {
  public tab:any="1";
  public dom: any;
  constructor() { }

  ngOnInit(): void {
  }

  firstTab(): void {
    this.tab = "1";
    // this.dom = document.getElementById('one');
    // this.dom.style.display = "block";
    // this.dom = document.getElementById('two');
    // this.dom.style.display = "none";
  }

  secondTab(): void {
    // this.tab = "2";
    // this.dom = document.getElementById('one');
    // this.dom.style.display = "none";
    // this.dom = document.getElementById('two');
    // this.dom.style.display = "block";
  }

}