import {AppState} from '../core.state';
import {ImageDTO, NavigationItemDto} from "./navigation.model";

export interface NavigationState {
  currentPage: NavigationItemDto | undefined;
  loading: boolean;
  pageBody: string;
  imageAssets: ImageDTO[];
}

export interface State extends AppState {
  navigation: NavigationState;
}
