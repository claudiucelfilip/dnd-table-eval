import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'app-ng2-table',
    templateUrl: './ng2-table.component.html',
    styleUrls: ['./ng2-table.component.css']
})
export class Ng2TableComponent implements OnInit {

    public rows: Observable<any>;

    public columns: Array<any> = [
        {
            title: 'Selected',
            name: 'selected'
        },
        {
            title: 'Title',
            name: 'Title'
        },
        {
            title: 'Flags',
            name: ''
        },
        {
            title: 'Version',
            name: 'Version'
        },
        {
            title: 'Artist',
            name: 'Artist.name'
        },
        {
            title: 'Loc',
            name: 'LocalClients'
        },
        {
            title: 'Writer',
            name: 'WriterString'
        },
        {
            title: 'Charts',
            name: 'ChartPosition'
        },
        {
            title: 'Notes',
            name: 'NotesCount'
        }
    ];

    public config: any = {
        paging: true,
        sorting: { columns: this.columns },
    };
    public length: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public page: BehaviorSubject<number> = new BehaviorSubject<number>(1);
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
        this.rows = this.songs.getPage(page)
            .map((results: any) => {
                this.length.next(results.TotalResults);
                return results.Tracks;
            });
    }

}
