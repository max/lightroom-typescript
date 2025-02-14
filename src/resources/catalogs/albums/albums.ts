// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AlbumsAPI from './albums';
import * as UtcDateTimeAPI from '../../utc-date-time';
import * as UuidAPI from '../../uuid';
import * as AssetsAPI from './assets';
import { AssetAddParams, AssetAddResponse, AssetListParams, AssetListResponse, Assets } from './assets';
import { APIPromise } from '../../../api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Albums extends APIResource {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);

  /**
   * Create a new album.
   */
  create(albumID: string, params: AlbumCreateParams, options?: RequestOptions): APIPromise<void> {
    const { catalog_id, Authorization, 'X-API-Key': xAPIKey, ...body } = params;
    return this._client.put(path`/v2/catalogs/${catalog_id}/albums/${albumID}`, {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', Authorization: Authorization, 'X-API-Key': xAPIKey },
        options?.headers,
      ]),
    });
  }

  /**
   * Read a album.
   */
  retrieve(
    albumID: string,
    params: AlbumRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AlbumRetrieveResponse> {
    const { catalog_id, Authorization, 'X-API-Key': xAPIKey } = params;
    return this._client.get(path`/v2/catalogs/${catalog_id}/albums/${albumID}`, {
      ...options,
      headers: buildHeaders([{ Authorization: Authorization, 'X-API-Key': xAPIKey }, options?.headers]),
    });
  }

  /**
   * Update an existing album. The existing album should be created via the same
   * client app and of subtype project or project_set.
   */
  update(albumID: string, params: AlbumUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { catalog_id, Authorization, 'X-API-Key': xAPIKey, ...body } = params;
    return this._client.post(path`/v2/catalogs/${catalog_id}/albums/${albumID}`, {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', Authorization: Authorization, 'X-API-Key': xAPIKey },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve a list of existing albums.
   */
  list(catalogID: string, params: AlbumListParams, options?: RequestOptions): APIPromise<AlbumListResponse> {
    const { Authorization, 'X-API-Key': xAPIKey, ...query } = params;
    return this._client.get(path`/v2/catalogs/${catalogID}/albums`, {
      query,
      ...options,
      headers: buildHeaders([{ Authorization: Authorization, 'X-API-Key': xAPIKey }, options?.headers]),
    });
  }

  /**
   * Delete an existing album. The existing album should be created via the same
   * client app and of subtype project or project_set.
   */
  delete(albumID: string, params: AlbumDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { catalog_id, Authorization, 'X-API-Key': xAPIKey, child_albums } = params;
    return this._client.delete(path`/v2/catalogs/${catalog_id}/albums/${albumID}`, {
      query: { child_albums },
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', Authorization: Authorization, 'X-API-Key': xAPIKey },
        options?.headers,
      ]),
    });
  }
}

export interface AlbumPayload {
  cover?: AlbumPayload.Cover;

  name?: string;

  parent?: AlbumPayload.Parent;

  publishInfo?: AlbumPayload.PublishInfo;

  /**
   * datetime in RFC-3339 format (subset of ISO-8601) requiring a UTC time ending
   * with Z (so -00:00 or +00-00 suffix NOT allowed). The datetime must have date and
   * time, including seconds, e.g. 2016-01-15T09:23:34Z.
   */
  userCreated?: UtcDateTimeAPI.UtcDateTime;

  /**
   * datetime in RFC-3339 format (subset of ISO-8601) requiring a UTC time ending
   * with Z (so -00:00 or +00-00 suffix NOT allowed). The datetime must have date and
   * time, including seconds, e.g. 2016-01-15T09:23:34Z.
   */
  userUpdated?: UtcDateTimeAPI.UtcDateTime;
}

export namespace AlbumPayload {
  export interface Cover {
    id?: UuidAPI.Uuid;
  }

  export interface Parent {
    id?: UuidAPI.Uuid;
  }

  export interface PublishInfo {
    /**
     * datetime in RFC-3339 format (subset of ISO-8601) requiring a UTC time ending
     * with Z (so -00:00 or +00-00 suffix NOT allowed). The datetime must have date and
     * time, including seconds, e.g. 2016-01-15T09:23:34Z.
     */
    created?: UtcDateTimeAPI.UtcDateTime;

    /**
     * True if the externally affiliated content (identified by remoteId) was deleted;
     * acts as a tombstone.
     */
    deleted?: boolean;

    /**
     * Identifier for the album that is unique to the publishing service.
     */
    remoteId?: string;

    /**
     * Links to affiliated URLs on the publishing service.
     */
    remoteLinks?: PublishInfo.RemoteLinks;

    /**
     * Album metadata, unique to the service, encapsulated as a single string with a
     * maximum length of 1024 characters.
     */
    servicePayload?: string;

    /**
     * datetime in RFC-3339 format (subset of ISO-8601) requiring a UTC time ending
     * with Z (so -00:00 or +00-00 suffix NOT allowed). The datetime must have date and
     * time, including seconds, e.g. 2016-01-15T09:23:34Z.
     */
    updated?: UtcDateTimeAPI.UtcDateTime;
  }

  export namespace PublishInfo {
    /**
     * Links to affiliated URLs on the publishing service.
     */
    export interface RemoteLinks {
      edit?: RemoteLinks.Edit;

      view?: RemoteLinks.View;
    }

    export namespace RemoteLinks {
      export interface Edit {
        /**
         * Fully-formed URL to a location to edit affiliated content (identified by
         * remoteId) on the external service.
         */
        href?: string;
      }

      export interface View {
        /**
         * Fully-formed URL to a location to view affiliated content (identified by
         * remoteId) on the external service.
         */
        href?: string;
      }
    }
  }
}

export interface AlbumRetrieveResponse {
  id?: UuidAPI.Uuid;

  /**
   * Base URL that can be prepended to the 'href' values in the 'links' to produce
   * fully qualified URLs for future queries.
   */
  base?: string;

  /**
   * datetime in RFC-3339 format (subset of ISO-8601) requiring a UTC time ending
   * with Z (so -00:00 or +00-00 suffix NOT allowed). The datetime must have date and
   * time, including seconds, e.g. 2016-01-15T09:23:34Z.
   */
  created?: UtcDateTimeAPI.UtcDateTime;

  links?: unknown;

  payload?: unknown;

  subtype?: string;

  type?: 'album';

  /**
   * datetime in RFC-3339 format (subset of ISO-8601) requiring a UTC time ending
   * with Z (so -00:00 or +00-00 suffix NOT allowed). The datetime must have date and
   * time, including seconds, e.g. 2016-01-15T09:23:34Z.
   */
  updated?: UtcDateTimeAPI.UtcDateTime;
}

export interface AlbumListResponse {
  /**
   * Base URL that can be prepended to the 'href' values in the 'links' to produce
   * fully qualified URLs for future queries.
   */
  base?: string;

  resources?: Array<AlbumListResponse.Resource>;
}

export namespace AlbumListResponse {
  export interface Resource {
    id?: UuidAPI.Uuid;

    /**
     * datetime in RFC-3339 format (subset of ISO-8601) requiring a UTC time ending
     * with Z (so -00:00 or +00-00 suffix NOT allowed). The datetime must have date and
     * time, including seconds, e.g. 2016-01-15T09:23:34Z.
     */
    created?: UtcDateTimeAPI.UtcDateTime;

    links?: unknown;

    payload?: AlbumsAPI.AlbumPayload;

    /**
     * The API Key (client identifier) of the service affiliated with the album.
     */
    serviceId?: string;

    subtype?: 'project' | 'project_set';

    type?: 'album';

    /**
     * datetime in RFC-3339 format (subset of ISO-8601) requiring a UTC time ending
     * with Z (so -00:00 or +00-00 suffix NOT allowed). The datetime must have date and
     * time, including seconds, e.g. 2016-01-15T09:23:34Z.
     */
    updated?: UtcDateTimeAPI.UtcDateTime;
  }
}

export interface AlbumCreateParams {
  /**
   * Path param: Identifier of the catalog containing the album.
   */
  catalog_id: string;

  /**
   * Header param: Bearer [token] - User access token of an authenticated Lightroom
   * customer
   */
  Authorization: string;

  /**
   * Header param: Client ID (API Key) which is subscribed to the Lightroom APIs
   * through console.adobe.io
   */
  'X-API-Key': string;

  /**
   * Body param:
   */
  payload?: AlbumPayload;

  /**
   * Body param: The API Key (client identifier) of the service creating the album.
   */
  serviceId?: string;

  /**
   * Body param:
   */
  subtype?: 'project' | 'project_set';
}

export interface AlbumRetrieveParams {
  /**
   * Path param: Identifier of the catalog containing the album.
   */
  catalog_id: string;

  /**
   * Header param: Bearer [token] - User access token of an authenticated Lightroom
   * customer
   */
  Authorization: string;

  /**
   * Header param: Client ID (API Key) which is subscribed to the Lightroom APIs
   * through console.adobe.io
   */
  'X-API-Key': string;
}

export interface AlbumUpdateParams {
  /**
   * Path param: Identifier of the catalog containing the album.
   */
  catalog_id: string;

  /**
   * Header param: Bearer [token] - User access token of an authenticated Lightroom
   * customer
   */
  Authorization: string;

  /**
   * Header param: Client ID (API Key) which is subscribed to the Lightroom APIs
   * through console.adobe.io
   */
  'X-API-Key': string;

  /**
   * Body param:
   */
  payload?: AlbumPayload;
}

export interface AlbumListParams {
  /**
   * Header param: Bearer [token] - User access token of an authenticated Lightroom
   * customer
   */
  Authorization: string;

  /**
   * Header param: Client ID (API Key) which is subscribed to the Lightroom APIs
   * through console.adobe.io
   */
  'X-API-Key': string;

  /**
   * Query param: Number of albums to return. Default value is 100. Please note that
   * the response may contain more than 'limit' number of albums returned if multiple
   * albums at the 'limit' boundary have the same name_after.
   */
  limit?: number;

  /**
   * Query param: UTF-8 string representing the name of the album that should precede
   * the current page of results. In other words, the response will contain result
   * with names greater than the 'name_after' value using standard string ordering
   * relations.
   */
  name_after?: string;

  /**
   * Query param: Comma-separated list of subtypes to enumerate. Subtype can be one
   * of 'project' or 'project_set'.
   */
  subtype?: string;
}

export interface AlbumDeleteParams {
  /**
   * Path param: Identifier of the catalog containing the album.
   */
  catalog_id: string;

  /**
   * Header param: Bearer [token] - User access token of an authenticated Lightroom
   * customer
   */
  Authorization: string;

  /**
   * Header param: Client ID (API Key) which is subscribed to the Lightroom APIs
   * through console.adobe.io
   */
  'X-API-Key': string;

  /**
   * Query param: This parameter when passed with a value, for example: true would
   * delete all the child albums as well of the album specified. The deletion of
   * child albums will be done asynchronously.
   */
  child_albums?: string;
}

Albums.Assets = Assets;

export declare namespace Albums {
  export {
    type AlbumPayload as AlbumPayload,
    type AlbumRetrieveResponse as AlbumRetrieveResponse,
    type AlbumListResponse as AlbumListResponse,
    type AlbumCreateParams as AlbumCreateParams,
    type AlbumRetrieveParams as AlbumRetrieveParams,
    type AlbumUpdateParams as AlbumUpdateParams,
    type AlbumListParams as AlbumListParams,
    type AlbumDeleteParams as AlbumDeleteParams,
  };

  export {
    Assets as Assets,
    type AssetListResponse as AssetListResponse,
    type AssetAddResponse as AssetAddResponse,
    type AssetListParams as AssetListParams,
    type AssetAddParams as AssetAddParams,
  };
}
