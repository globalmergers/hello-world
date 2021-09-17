import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
declare var particlesJS: any;
@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss']
})
export class IndustryComponent implements OnInit {
  public tab: any = "1";
  public Title: any;
  public b1: any;
  public b2: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((value: any) => {
      this.Title = value.title;
      this.b1 = value.b1;
      this.b2 = value.b2;
    });
  }

}
