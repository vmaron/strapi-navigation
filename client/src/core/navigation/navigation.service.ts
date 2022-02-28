import {Injectable} from '@angular/core';
import {BaseService} from "../http/base-service";
import {HttpClient} from "@angular/common/http";
import {ApiConfiguration} from "../http/api-configuration";
import {Observable} from "rxjs";
import {NavigationItemDto} from "./navigation.model";

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
}
