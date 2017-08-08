import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'app-ngx-datatable',
    templateUrl: './ngx-datatable.component.html',
    styleUrls: ['./ngx-datatable.component.css']
})
export class NgxDatatableComponent implements OnInit {
    public rows: Observable<any>;
    public columns: Array<any>;
    public length: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public page: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public selected: Array<any> = [];
    constructor(private songs: SongsService) {
        this.page.subscribe((val) => this.getPage(val));
    }

    ngOnInit() {
    }

    getPage(page) {
        this.rows = this.songs.getPage(page)
            .map((results: any) => {
                this.length.next(results.TotalResults);
                return results.Tracks;
            });
    }

}
