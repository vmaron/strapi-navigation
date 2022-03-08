import {Component, Input, OnInit} from '@angular/core';
import {NavigationItemDto} from "../../../core/navigation/navigation.model";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {actionLoadPage} from "../../../core/navigation/navigtion.actions";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  _menuItems: Array<NavigationItemDto> = [];

  @Input() set menuItems(value: Array<NavigationItemDto>) {
    this._menuItems = value;
    console.log(this._menuItems);
  }

  constructor(
    private router: Router,
    private store: Store) {
  }

  ngOnInit(): void {

  }

  handleMenuItemClick(item: NavigationItemDto) {
    this.store.dispatch(actionLoadPage({payload: {currentPage: item}}));
  }
}
