// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AlbumsAPI from './albums/albums';
import {
  AlbumCreateParams,
  AlbumDeleteParams,
  AlbumListParams,
  AlbumListResponse,
  AlbumPayload,
  AlbumRetrieveParams,
  AlbumRetrieveResponse,
  AlbumUpdateParams,
  Albums,
} from './albums/albums';
import * as AssetsAPI from './assets/assets';
import {
  AssetCreateMasterParams,
  AssetCreateParams,
  AssetListParams,
  AssetListResponse,
  AssetRetrieveParams,
  AssetRetrieveResponse,
  Assets,
} from './assets/assets';

export class Catalogs extends APIResource {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  albums: AlbumsAPI.Albums = new AlbumsAPI.Albums(this._client);
}

Catalogs.Assets = Assets;
Catalogs.Albums = Albums;

export declare namespace Catalogs {
  export {
    Assets as Assets,
    type AssetRetrieveResponse as AssetRetrieveResponse,
    type AssetListResponse as AssetListResponse,
    type AssetCreateParams as AssetCreateParams,
    type AssetRetrieveParams as AssetRetrieveParams,
    type AssetListParams as AssetListParams,
    type AssetCreateMasterParams as AssetCreateMasterParams,
  };

  export {
    Albums as Albums,
    type AlbumPayload as AlbumPayload,
    type AlbumRetrieveResponse as AlbumRetrieveResponse,
    type AlbumListResponse as AlbumListResponse,
    type AlbumCreateParams as AlbumCreateParams,
    type AlbumRetrieveParams as AlbumRetrieveParams,
    type AlbumUpdateParams as AlbumUpdateParams,
    type AlbumListParams as AlbumListParams,
    type AlbumDeleteParams as AlbumDeleteParams,
  };
}
