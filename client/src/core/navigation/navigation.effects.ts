import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {Router} from "@angular/router";
import {actionLoadPage} from "./navigtion.actions";

@Injectable()
export class NavigationEffects {
  constructor(
    private actions$: Actions,
    private router: Router
  ) {
  }


  navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionLoadPage),
        tap((action) => {
            const {path} = action.payload.page;
            this.router.navigateByUrl(path);
          }
        )
      ),
    {dispatch: false}
  );

}
