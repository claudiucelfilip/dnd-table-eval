import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
const koModel = require('koModel');

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor(router: Router) {
        router.events.subscribe((event: any) => {
            koModel.route(event.url);
        });
    }
}
