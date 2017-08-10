import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SongsService } from '../songs.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DragDropConfig, DragImage } from 'ng2-dnd';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'app-music-search',
    templateUrl: './music-search.component.html',
    styleUrls: ['./music-search.component.css']
})
export class MusicSearchComponent implements OnInit {
    nodes = [
        {
            id: 1,
            name: 'root1',
            children: [
                { id: 2, name: 'child1' },
                { id: 3, name: 'child2' }
            ]
        },
        {
            id: 4,
            name: 'root2',
            children: [
                { id: 5, name: 'child2.1' },
                {
                    id: 6,
                    name: 'child2.2',
                    children: [
                        { id: 7, name: 'subsub' }
                    ]
                }
            ]
        }
    ];
    public rows: Observable<any>;
    public dragImage: HTMLImageElement;
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
    constructor(private songs: SongsService, config: DragDropConfig) {
        this.page
            .distinctUntilChanged((x, y) => x === y)
            .subscribe((val) => {
                this.getPage(val);
            });

        let img = document.createElement('img');
        img.onload = () => {
            config.dragImage = new DragImage(img);
        };
        img.src = 'http://kryogenix.org/images/hackergotchi-simpler.png';
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

    newFolder() {
        console.log('new folder');
    }
    edit() {
        console.log('edit');
    }
    delete() {
        console.log('delete');
    }

}
