import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiConfiguration, ApiConfigurationParams} from "./http/api-configuration";
import {NavigationService} from "./services";


@NgModule({
  declarations: [],
  providers: [NavigationService],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor(
    @Optional()
    @SkipSelf()
      parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
