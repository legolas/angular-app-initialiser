import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppConfig } from './app-config';

export function initialise(config: AppConfig) {
    return () => config.load();
}
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        AppConfig,
        {
            provide: APP_INITIALIZER,
            useFactory: initialise,
            deps:[AppConfig],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
