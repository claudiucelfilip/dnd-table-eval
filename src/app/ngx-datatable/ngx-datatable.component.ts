import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'app-ngx-datatable',
    templateUrl: './ngx-datatable.component.html',
    styleUrls: ['./ngx-datatable.component.css']
})
export class NgxDatatableComponent implements OnInit {
    public rows: BehaviorSubject<any> = new BehaviorSubject<any>(0);
    public columns: Array<any>;
    public length: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public page: BehaviorSubject<number> = new BehaviorSubject<number>(1);
    public selected: Array<any> = [];
    constructor(private songs: SongsService) {
        this.page
            .distinctUntilChanged((x, y) => x === y)
            .subscribe((val) => {
                this.getPage(val);
            });
    }

    ngOnInit() {
    }

    getPage(page) {
        this.songs.getPage(page)
            .subscribe((results: any) => {
                this.length.next(results.TotalResults);
                this.rows.next(results.Tracks);
            });
    }

}
