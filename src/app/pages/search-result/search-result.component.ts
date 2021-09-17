import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  p: any = 1;
  cards = [
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" },
    { image: "assets/images/no-image.jpg" }
  ]
  constructor() { }

  ngOnInit(): void {
    // particlesJS.load('particles-js', 'assets/js/particles.json', function() {
    //   console.log('callback - particles.js config loaded');
    // });
  }

}
