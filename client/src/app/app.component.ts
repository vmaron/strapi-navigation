import {Component, OnInit} from '@angular/core';
import {NavigationService} from "../core/services";
import {first} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'strapi-navigation-client';

  constructor(
    private navigationService: NavigationService
  ) {
  }

  ngOnInit(): void {
    this.navigationService.getNavigationMenu()
      .pipe(first())
      .subscribe({
        next: menuItemsDto => {
         console.log(menuItemsDto);
        },
        error: error => {
          console.log(error);
        }
      });
  }
}
