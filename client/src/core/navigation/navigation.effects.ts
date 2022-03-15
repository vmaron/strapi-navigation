import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {Router} from "@angular/router";
import {actionLoadImageLibraryContent, actionLoadPage, actionLoadPageContent} from "./navigtion.actions";
import {first} from "rxjs";
import {NavigationService} from "./navigation.service";
import {ImageLibraryDTO, PageContentDTO} from "./navigation.model";
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
            const {path,  title, related: {id, __contentType}} = action.payload.currentPage;
            this.router.navigateByUrl(path).then(() => {
              switch (__contentType) {
                case 'api::page.page':
                  this.navigationService.getPageContent(id)
                    .pipe(first())
                    .subscribe({
                      next: (response: PageContentDTO) => {
                        const {name, pageContent} = response.data.attributes;
                        const body = pageContent.data?.attributes?.body || '';

                        setTimeout(() => this.store.dispatch(actionLoadPageContent({
                          payload: {id, name, body}
                        })), 400);

                      },
                      error: error => {
                        console.log(error);
                      }
                    });
                  break;
                case 'api::photo-gallery.photo-gallery':

                  this.navigationService.getImageLibrary(id)
                    .pipe(first())
                    .subscribe({
                      next: (response: ImageLibraryDTO) => {

                        setTimeout(() => this.store.dispatch(actionLoadImageLibraryContent({
                          payload: {imageAssets: response.data.attributes.imageAssets}
                        })), 400);

                      },
                      error: error => {
                        console.log(error);
                      }
                    });
                  break;
              }

            });

          }
        )
      ),
    {dispatch: false}
  );


}
