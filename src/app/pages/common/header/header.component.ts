import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  items: any = [
    {name : 'Automotive', link: '/industry-Automotive'},
    {name:'Electric Vehicle', link: 'industry-Electric-Vehicle'},
    {name:'Energy', link: 'industry-Energy'},
    {name:'Industrial Goods', link: 'industry-Industrial-Goods'}
  ];
  items2: any = [
    {name : 'Austria', link : '/country-austria'},
    {name : 'Belgium', link : '/country/Belgium'},
    {name : 'Czech Republic', link : '/country/czech-republic'},
    {name : 'Switzerland', link : '/country/switzerland'},
    {name : 'Croatia', link : '/country/croatia'},
    {name : 'Denmark', link : '/country/denmark'},
    {name : 'Finland', link : '/country/dinland'},
    {name : 'France', link : '/country/france'},
    {name : 'Germany', link : '/country/Germany'},
    {name : 'Hungary', link : '/country/hungary'},
    {name : 'Italy', link : '/country/italy'},
    {name : 'Netherlands', link : '/country/netherlands'},
    {name : 'Poland', link : '/country/poland'},
    {name : 'Portugal', link : '/country/portugal'},
    {name : 'Romania', link : '/country/romania'},
    {name : 'Slovakia', link : '/country/slovakia'},
    {name : 'Slovenia', link : '/country/slovenia'},
    {name : 'Spain', link : '/country/spain'},
    {name : 'Sweden', link : '/country/sweden'}
  ];
  isCollapsed2: boolean = true;
  isCollapsed3: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.items2.sort((a :any, b:any)=> {
      if (a.name < b.name) {
          return -1;
      }
      if (b.name > a.name) {
          return 1;
      }
      return 0;
  });
    console.log(this.items2);
    let val :any = document.querySelector(".nav-toggle");
    val?.addEventListener("click", (e :any) => {
      e.preventDefault();
      let dom :any = document.querySelector("html");
            dom.classList.toggle("openNav");
      e.classList.toggle("active");
    });
  }
  openNav() {
    let val : any = document.getElementById("myNav");
    // console.log(val.style.opacity);
    // val.style.zIndex = '1001';
    val.classList.add('mob-opacity1');
    val.classList.remove('mob-opacity');
  }
  
  closeNav() {
    let val : any = document.getElementById("myNav");
    // val.style.zIndex = '100';
    val.classList.add('mob-opacity');
    val.classList.remove('mob-opacity1');
    // console.log(val.style.width);
  }

}
