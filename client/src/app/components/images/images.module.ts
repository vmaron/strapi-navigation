import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThumbnailGridComponent} from "./components/thumbnail-grid/thumbnail-grid.component";



@NgModule({
  declarations: [ ThumbnailGridComponent,],
  imports: [
    CommonModule
  ],
  exports: [
    ThumbnailGridComponent
  ],
})
export class ImagesModule { }
