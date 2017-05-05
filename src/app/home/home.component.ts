import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    needLogin: boolean;

    constructor(
        private route: ActivatedRoute) {
    }


    ngOnInit() {
        this.route.params.subscribe((p) => {
            this.needLogin = (p['needLogin'] === 'true');
        });
    }
}
