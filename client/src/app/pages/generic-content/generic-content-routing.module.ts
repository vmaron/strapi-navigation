import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GenericContentComponent} from "./generic-content.component";

const routes: Routes = [{ path: '', component: GenericContentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericContentRoutingModule { }
