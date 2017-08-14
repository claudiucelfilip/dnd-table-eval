import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SongsService } from '../songs.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/distinctUntilChanged';

import { GridOptions } from 'ag-grid/main';

@Component({
    selector: 'app-ag-grid',
    templateUrl: './ag-grid.component.html',
    styleUrls: ['./ag-grid.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AgGridComponent implements OnInit {
    public rows: BehaviorSubject<any> = new BehaviorSubject<any>(0);
    public columns: Array<any>;
    public gridOptions: GridOptions;
    public length: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public page: BehaviorSubject<number> = new BehaviorSubject<number>(1);
    public selected: Array<any> = [];
    constructor(private songs: SongsService) {
        this.gridOptions = <GridOptions>{
            onGridReady: () => {
                this.gridOptions.api.sizeColumnsToFit();
            }
        };
        this.columns = [
            {
                headerName: 'Selected',
                field: 'selected'
            },
            {
                headerName: 'Title',
                field: 'Title'
            },
            {
                headerName: 'Flags',
                field: ''
            },
            {
                headerName: 'Version',
                field: 'Version'
            },
            {
                headerName: 'Artist',
                field: 'Artist.name'
            },
            {
                headerName: 'Loc',
                field: 'LocalClients'
            },
            {
                headerName: 'Writer',
                field: 'WriterString'
            },
            {
                headerName: 'Charts',
                field: 'ChartPosition'
            },
            {
                headerName: 'Notes',
                field: 'NotesCount'
            }
        ];
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

    private onRowClicked($event) {
        console.log('onRowClicked: ' + $event);
    }


}
