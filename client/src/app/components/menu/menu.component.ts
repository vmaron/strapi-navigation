import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NavigationItemDto} from "../../../core/navigation/navigation.model";

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
  constructor() { }

  ngOnInit(): void {

  }
}
