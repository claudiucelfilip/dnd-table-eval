import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
    @Input() page: BehaviorSubject<number>;
    @Input() length: BehaviorSubject<number>;
    @Output() numPages: EventEmitter<number> = new EventEmitter<number>();
    constructor() {

    }

    ngOnInit() {
        this.page.subscribe((val) => console.log(val));
        this.length.subscribe((val) => console.log(val));
    }

}
