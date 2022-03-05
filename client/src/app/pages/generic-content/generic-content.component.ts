import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-generic-content',
  templateUrl: './generic-content.component.html',
  styleUrls: ['./generic-content.component.scss']
})
export class GenericContentComponent implements OnInit {

  routeUrl: string = '';

  constructor(private readonly route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.routeUrl = this.router.url;
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.routeUrl = this.router.url;
      }
    });
  }

}
