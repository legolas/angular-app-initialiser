import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../environments/environment';

@Injectable()
    export class AppConfig {

    private config: Object = null;
    private env: Object = null;

    constructor(private http: Http) {}

    public getConfig(key: any) {
        return this.config[key];
    }

    public load() {
        console.log("Env: " + environment.envName)
        const url = environment.configUrl;

        return new Promise((resolve, reject) => {
            this.http
                .get(url)
                .map(res => res.json())
                .catch((error: any): any => {
                    console.log('Configuration from "' + url + " could not be read");
                    resolve(true);
                    return Observable.throw(error.json().error || 'Server error');
                }).subscribe((config) => {
                    this.config = config;
                    resolve(true);
                });
        });
    }
}
