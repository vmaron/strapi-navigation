import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {State} from "../../../core/navigation/navigation.state";
import {select, Store} from "@ngrx/store";
import {Subject, takeUntil} from "rxjs";
import {selectNavigation} from "../../../core/navigation/navigation.selectors";


@Component({
  selector: 'app-generic-content',
  templateUrl: './generic-content.component.html',
  styleUrls: ['./generic-content.component.scss']
})
export class GenericContentComponent implements OnInit, OnDestroy{

  routeUrl: string = '';
  ngUnsubscribe: Subject<any> = new Subject();
  loading: boolean = false;
  pageBody: string = '';

  constructor(private readonly route: ActivatedRoute,
              private router: Router,
              private store: Store<State>) {
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
    }

  ngOnInit(): void {
    this.routeUrl = this.router.url;
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.routeUrl = this.router.url;
      }
    });

    this.store.pipe(select(selectNavigation)).pipe(takeUntil(this.ngUnsubscribe)).subscribe((nav) => {
      this.loading = nav.loading;
      this.pageBody = nav.pageBody;
    });
  }

}
