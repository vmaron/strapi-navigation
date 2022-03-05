import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericContentRoutingModule } from './generic-content-routing.module';
import { GenericContentComponent } from './generic-content.component';


@NgModule({
  declarations: [
    GenericContentComponent
  ],
  imports: [
    CommonModule,
    GenericContentRoutingModule
  ]
})
export class GenericContentModule { }
