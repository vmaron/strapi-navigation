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
  isOpen: boolean = false;

  @Input() set menuItems(value: Array<NavigationItemDto>) {
    this._menuItems = value;
    this.loadContentByPath(this._menuItems, window.location.pathname);
  }

  constructor(
    private router: Router,
    private store: Store) {
  }

  ngOnInit(): void {
  }

  loadContentByPath(navItems: Array<NavigationItemDto>, path: string): boolean {
    return navItems.every((navItem) => {
      if (navItem.path === path) {
        this.store.dispatch(actionLoadPage({payload: {currentPage: navItem}}));
        return false;
      } else {
        if (navItem.items) {
          this.loadContentByPath(navItem.items, path);
        }
      }
      return true;
    });
  }

  handleMenuItemClick(item: NavigationItemDto) {
    this.isOpen = false;
    this.store.dispatch(actionLoadPage({payload: {currentPage: item}}));
  }

  toggleNavMenu() {
    this.isOpen = !this.isOpen;
  }
}
