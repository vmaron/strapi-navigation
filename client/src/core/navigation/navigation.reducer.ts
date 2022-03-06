import {NavigationState} from './navigation.state';
import {actionLoadPage} from './navigtion.actions';
import {Action, createReducer, on} from '@ngrx/store';

export const navigationFeatureKey = 'navigation';

export const initialState: NavigationState = {
  currentPage: undefined
};

const reducer = createReducer(
  initialState,
  on(
    actionLoadPage,
    (state, action) => ({...state, ...action.payload})
  )
);

export function navigationReducer(
  state: NavigationState | undefined,
  action: Action
) {
  return reducer(state, action);
}
