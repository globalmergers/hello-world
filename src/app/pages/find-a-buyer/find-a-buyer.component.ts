import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
declare var particlesJS: any;

@Component({
    selector: 'app-find-a-buyer',
    templateUrl: './find-a-buyer.component.html',
    styleUrls: ['./find-a-buyer.component.scss']
})
export class FindABuyerComponent implements OnInit {
    public Title: any;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        particlesJS.load('particles-js', 'assets/js/particles.json', function () {
            console.log('callback - particles.js config loaded');
        });
        this.route.data.subscribe((value: any) => {
            this.Title = value.title;
        });
    }

}
