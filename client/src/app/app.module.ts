import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "../core/core.module";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CoreModule.forRoot({rootUrl: environment.api}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
