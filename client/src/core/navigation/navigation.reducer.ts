import {NavigationState} from './navigation.state';
import {actionLoadPage, actionLoadPageContent} from './navigtion.actions';
import {Action, createReducer, on} from '@ngrx/store';

export const navigationFeatureKey = 'navigation';

export const initialState: NavigationState = {
  currentPage: undefined,
  loading: false,
  pageBody: ''
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
);

export function navigationReducer(
  state: NavigationState | undefined,
  action: Action
) {
  return reducer(state, action);
}
