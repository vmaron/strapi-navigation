import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu.component';
import {RouterModule} from "@angular/router";
import {UserMenuComponent} from "./user-menu/user-menu.component";

@NgModule({
  declarations: [MenuComponent, UserMenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [MenuComponent],
})
export class MenuModule {
}
