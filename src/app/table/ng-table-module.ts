import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DndModule } from 'ng2-dnd';
import { NgTableComponent } from './table/ng-table.component';
import { NgTableFilteringDirective } from './table/ng-table-filtering.directive';
import { NgTablePagingDirective } from './table/ng-table-paging.directive';
import { NgTableSortingDirective } from './table/ng-table-sorting.directive';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
    imports: [CommonModule, DndModule.forRoot(), DragulaModule],
    declarations: [NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective],
    exports: [NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective, DndModule]
})
export class Ng2TableModule {
}
