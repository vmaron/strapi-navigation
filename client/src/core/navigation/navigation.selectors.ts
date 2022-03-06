import {createSelector} from '@ngrx/store';
import {NavigationState} from './navigation.state';
import {selectNavigationState} from '../core.state';

export const selectNavigation = createSelector(
  selectNavigationState,
  (state: NavigationState) => state
);

export const selectCurrentPage = createSelector(
  selectNavigation,
  (state) => state.currentPage
);
