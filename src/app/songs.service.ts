import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SongsService {

    constructor(private http: HttpClient) {}

    getPage(page: number = 0) {
        return this.http.post('http://sparkling-violet-8125.getsandbox.com/MusicSearchHandler.aspx', {
            page
        });
    }

}
