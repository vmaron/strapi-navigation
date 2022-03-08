import {AppState} from '../core.state';
import {NavigationItemDto} from "./navigation.model";

export interface NavigationState {
  currentPage: NavigationItemDto | undefined;
  loading: boolean;
  pageBody: string;
}

export interface State extends AppState {
  navigation: NavigationState;
}
