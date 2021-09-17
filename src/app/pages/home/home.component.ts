import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare var particlesJS: any;
declare var Particles: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loop: boolean = true;
  interval: any;
  interval2: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.particle();
    this.slider();
  }

  particle(): void {
    try {
      Particles.init({
        selector: '.background',
        color: '#326CF4',
        context: "3d",
        maxParticles: 40,
        sizeVariations: 3,
        speed: 1,
        connectParticles: true,
        responsive: [
          {
            maxParticles: 15,
            breakpoint: 100,
            options: {
              maxParticles: 25
            }
          }, {
            maxParticles: 15,
            breakpoint: 100,
            options: {
              maxParticles: 25
            }
          }
        ]
      });
    } catch (e) {
      console.info(e);
    }
  }

  stopTimer() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    if (this.interval2) {
      clearInterval(this.interval2);
    }
  }


  slider(): void {
    try {
        $('#news-container').vTicker({
            speed: 400,
            pause: 2000,
            animation: 'fade',
            mousePause: false,
            showItems: 5
        });
    } catch (e) {
      console.info(e);
    }
  }

}
