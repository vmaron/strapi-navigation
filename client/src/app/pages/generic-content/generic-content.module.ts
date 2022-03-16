import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GenericContentRoutingModule} from './generic-content-routing.module';
import {GenericContentComponent} from './generic-content.component';
import {SafeHtmlPipe} from "./pipes/safe-html.pipe";
import {LoadingIndicatorModule} from "../../components/loading-indicator/loading-indicator.module";
import {ImagesModule} from "../../components/images/images.module";


@NgModule({
  declarations: [
    GenericContentComponent,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
    GenericContentRoutingModule,
    LoadingIndicatorModule,
    ImagesModule
  ]
})
export class GenericContentModule {
}
