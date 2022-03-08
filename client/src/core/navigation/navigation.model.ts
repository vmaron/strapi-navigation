export interface NavigationItemDto {
  id: number;
  title: string;
  menuAttached: boolean;
  path: string;
  type: string;
  uiRouterKey: string;
  slug: string;
  external: boolean;
  related: PageDto;
  items: NavigationItemDto[];
}

export interface PageDto {
  id: number;
  name: string;
  type: string;
  content?: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  __contentType: string;
  navigationItemId: number;
  __templateName: string;
}

export interface PageContent {
  id: number;
  name: string;
  body: string;
}

export interface PageContentDto {
  data: {
    id: number;
    attributes: {
      name: string;
      type: string;
      pageContent: {
        data: {
          id: number;
          attributes: {
            createdAt: string;
            updatedAt: string;
            body: string;
          };
        };
      };
    };
  }
}




