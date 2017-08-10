import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SongsService } from '../songs.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DragDropConfig, DragImage } from 'ng2-dnd';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'app-ng2-table',
    templateUrl: './ng2-table.component.html',
    styleUrls: ['./ng2-table.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class Ng2TableComponent implements OnInit {
    ngOnInit() {}
}
