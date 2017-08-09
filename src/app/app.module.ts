import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng2TableComponent } from './ng2-table/ng2-table.component';
import { NgxDatatableComponent } from './ngx-datatable/ngx-datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';

import { Ng2TableModule } from './table/ng-table-module';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SongsService } from './songs.service';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
    declarations: [
        AppComponent,
        Ng2TableComponent,
        NgxDatatableComponent,
        HomeComponent,
        SearchComponent,
        PaginationComponent
    ],
    imports: [
        BrowserModule,
        NgxDatatableModule,
        FormsModule,
        Ng2TableModule,
        HttpClientModule,
        PaginationModule.forRoot(),

        RouterModule.forRoot([{
            path: '',
            component: HomeComponent
        }, {
            path: 'ng2-table',
            component: Ng2TableComponent
        }, {
            path: 'ngx-datatable',
            component: NgxDatatableComponent
        }])
    ],
    providers: [SongsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
