import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {Router} from "@angular/router";
import {actionLoadPage, actionLoadPageContent} from "./navigtion.actions";
import {first} from "rxjs";
import {NavigationService} from "./navigation.service";
import {PageContentDto} from "./navigation.model";
import {Store} from "@ngrx/store";
import {State} from "./navigation.state";

@Injectable()
export class NavigationEffects {
  constructor(
    private navigationService: NavigationService,
    private actions$: Actions,
    private store: Store<State>,
    private router: Router
  ) {
  }


  navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionLoadPage),
        tap((action) => {
            const {path, related: {id}} = action.payload.currentPage;
            this.router.navigateByUrl(path).then(() => {
              this.navigationService.getPageContent(id)
                .pipe(first())
                .subscribe({
                  next: (response: PageContentDto) => {
                    const {name, pageContent} = response.data.attributes;
                    const body = pageContent.data?.attributes?.body || '';

                    this.store.dispatch(actionLoadPageContent({
                      payload: {id, name, body}
                    }));

                  },
                  error: error => {
                    console.log(error);
                  }
                });
            });

          }
        )
      ),
    {dispatch: false}
  );


}
