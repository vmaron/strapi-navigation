import {createAction, props} from '@ngrx/store';
import {NavigationItemDto} from "./navigation.model";

export const actionLoadPage = createAction(
  '[Navigation] Load Page',
  props<{ payload: { page: NavigationItemDto } }>()
);
