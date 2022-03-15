import {Injectable} from '@angular/core';
import {BaseService} from "../http/base-service";
import {HttpClient} from "@angular/common/http";
import {ApiConfiguration} from "../http/api-configuration";
import {Observable} from "rxjs";
import {ImageLibraryDTO, NavigationItemDto, PageContentDTO} from "./navigation.model";

@Injectable({
  providedIn: 'root'
})
export class NavigationService extends BaseService {

  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  getNavigationMenu(): Observable<Array<NavigationItemDto>> {
    const url = `${this.rootUrl}/navigation/render/home?type=tree`;
    return this.http.get<Array<NavigationItemDto>>(url);
  }

  getPageContent(pageId: number): Observable<PageContentDTO> {
    const url = `${this.rootUrl}/pages/${pageId}?fields=name,type&populate=pageContent`;
    return this.http.get<PageContentDTO>(url);
  }

  getImageLibrary(id: number): Observable<ImageLibraryDTO> {
    const url = `${this.rootUrl}/photo-galleries/${id}?populate[imageAssets][populate][0]=image`;
    return this.http.get<ImageLibraryDTO>(url);
  }
}
