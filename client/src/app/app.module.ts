import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "../core/core.module";
import {environment} from "../environments/environment";
import {MenuModule} from "./components/menu/menu.module";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    CoreModule.forRoot({rootUrl: environment.api}),
    MenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
