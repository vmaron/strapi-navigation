import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {routerFeatureKey, RouterStateUrl} from './router/router.state';
import {navigationFeatureKey, navigationReducer} from './navigation/navigation.reducer';
import {NavigationState} from './navigation/navigation.state';


export const reducers: ActionReducerMap<AppState> = {
  navigation: navigationReducer,
  router: routerReducer
};

export const selectNavigationState = createFeatureSelector<NavigationState>(navigationFeatureKey);
export const selectRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>(routerFeatureKey);


export interface AppState {
  navigation: NavigationState;
  router: RouterReducerState<RouterStateUrl>;
}
