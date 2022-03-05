import {Component, OnInit, ViewChild} from '@angular/core';
import {NavigationService} from "../core/services";
import {first} from "rxjs";
import {MenuComponent} from "./components/menu/menu.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'strapi-navigation-client';
  @ViewChild('menu') menuComponent: MenuComponent | undefined;

  constructor(
    private navigationService: NavigationService
  ) {
  }

  ngOnInit(): void {
    this.navigationService.getNavigationMenu()
      .pipe(first())
      .subscribe({
        next: menuItemsDto => {
          if (this.menuComponent)
            this.menuComponent.menuItems = menuItemsDto;
        },
        error: error => {
          console.log(error);
        }
      });
  }
}
