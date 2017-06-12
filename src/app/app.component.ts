import { Component, OnInit } from '@angular/core';
import { AppConfig } from './app-config';
import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    endpoint: string = environment.configUrl;
    path: string;
    title = 'app works!';
    env = environment.envName;


    constructor(private config: AppConfig) {}

    ngOnInit() {
        this.endpoint = this.config.getConfig("content-api-endpoint");
        this.path = this.config.getConfig("cms.path.portal-loket");
    }
}
