import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GenericContentRoutingModule} from './generic-content-routing.module';
import {GenericContentComponent} from './generic-content.component';
import {SafeHtmlPipe} from "./pipes/safe-html.pipe";


@NgModule({
  declarations: [
    GenericContentComponent,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
    GenericContentRoutingModule
  ]
})
export class GenericContentModule {
}
