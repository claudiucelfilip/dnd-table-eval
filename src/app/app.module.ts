import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng2TableComponent } from './ng2-table/ng2-table.component';
import { NgxDatatableComponent } from './ngx-datatable/ngx-datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';

import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SongsService } from './songs.service';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component';
import { TreeModule } from 'angular-tree-component';
import { DndModule } from 'ng2-dnd';
import { MusicSearchComponent } from './music-search/music-search.component';
import { ManagePlaylistsComponent } from './manage-playlists/manage-playlists.component';
import { ManagePitchesComponent } from './manage-pitches/manage-pitches.component';
import { ManageTagsComponent } from './manage-tags/manage-tags.component';

@NgModule({
    declarations: [
        AppComponent,
        Ng2TableComponent,
        NgxDatatableComponent,
        HomeComponent,
        SearchComponent,
        PaginationComponent,
        MusicSearchComponent,
        ManagePlaylistsComponent,
        ManagePitchesComponent,
        ManageTagsComponent
    ],
    imports: [
        BrowserModule,
        NgxDatatableModule,
        DndModule.forRoot(),
        FormsModule,
        TreeModule,
        Ng2TableModule,
        HttpClientModule,
        PaginationModule.forRoot(),

        RouterModule.forRoot([{
            path: '',
            component: HomeComponent
        }, {
            path: 'Digital-Music-Library',
            component: Ng2TableComponent,
            children: [
                { path: 'search', component: MusicSearchComponent},
                { path: 'Playlists.aspx', component: ManagePlaylistsComponent},
                { path: 'Pitches.aspx', component: ManagePitchesComponent},
                { path: 'manage-tags', component: ManageTagsComponent},
            ]
        }, {
            path: 'ngx-datatable',
            component: NgxDatatableComponent
        }])
    ],
    providers: [SongsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
