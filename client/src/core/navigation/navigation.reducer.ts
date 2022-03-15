import {NavigationState} from './navigation.state';
import {actionLoadImageLibraryContent, actionLoadPage, actionLoadPageContent} from './navigtion.actions';
import {Action, createReducer, on} from '@ngrx/store';
import {ImageDTO} from "./navigation.model";

export const navigationFeatureKey = 'navigation';

export const initialState: NavigationState = {
  currentPage: undefined,
  loading: false,
  pageBody: '',
  imageAssets: []
};

const reducer = createReducer(
  initialState,
  on(
    actionLoadPage,
    (state, action) => ({...state, ...action.payload, loading: true, pageBody: ''})
  ),
  on(actionLoadPageContent,
    (state, action) => ({...state, loading: false, pageBody: action.payload.body})
  ),
  on(actionLoadImageLibraryContent,
    (state, action) => ({...state, loading: false, imageAssets: action.payload.imageAssets})
  ),
);

export function navigationReducer(
  state: NavigationState | undefined,
  action: Action
) {
  return reducer(state, action);
}
