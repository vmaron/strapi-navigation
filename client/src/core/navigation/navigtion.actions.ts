import {createAction, props} from '@ngrx/store';
import {ImageDTO, ImageLibraryRequest, NavigationItemDto, PageContent} from "./navigation.model";

export const actionLoadPage = createAction(
  '[Navigation] Load Page',
  props<{ payload: { currentPage: NavigationItemDto } }>()
);

export const actionLoadPageContent = createAction(
  '[Navigation] Load Page Content',
  props<{ payload: PageContent }>()
);

export const actionLoadImageLibraryContent = createAction(
  '[Navigation] Load Image Library',
  props<{ payload: {imageAssets: ImageDTO[]} }>()
);
