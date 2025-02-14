// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as UtcDateTimeAPI from '../../utc-date-time';
import * as UuidAPI from '../../uuid';
import { APIPromise } from '../../../api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Assets extends APIResource {
  /**
   * Lists assets in an album. The assets in an album are returned sorted on either
   * order if order* parameters are used. The assets in an album are returned sorted
   * on captured date if order* parameters are not used and captured\* parameters are
   * used. Please note that the created and updated dates for Album asset documents
   * will be returned as "0000-00-00T00:00:00". Successful response may also return
   * invalid flag in the rendition link for the asset. A rendition becomes invalid
   * when an asset is edited after rendition has been generated. New renditions (only
   * 2560 and fullsize) can be generated via Generate Renditions API. The read
   * xmp/develop link in the response will have the invalid flag as true if asset
   * with SHA256 has been created but external xmp/develop has not been uploaded yet.
   */
  list(albumID: string, params: AssetListParams, options?: RequestOptions): APIPromise<AssetListResponse> {
    const { catalog_id, Authorization, 'X-API-Key': xAPIKey, ...query } = params;
    return this._client.get(path`/v2/catalogs/${catalog_id}/albums/${albumID}/assets`, {
      query,
      ...options,
      headers: buildHeaders([{ Authorization: Authorization, 'X-API-Key': xAPIKey }, options?.headers]),
    });
  }

  /**
   * Add many assets to the album. Note that there is no default defined
   * order/position for the asset in the album. A payload may be provided with cover,
   * order, and any other data allowed in the data model. If the asset already exists
   * in the album and the cover field is supplied, then no error is thrown but only
   * the cover update is applied and other entries in the payload are completely
   * ignored. In all other cases trying to add an asset to an album that is already
   * in the album will return an error. Limited to 50 assets per API call. Returns
   * http status 201 if at least one asset was added to the album. If all assets
   * could not be added, http status 403 is returned. Individual error codes are
   * returned for each asset in the response body.
   */
  add(albumID: string, params: AssetAddParams, options?: RequestOptions): APIPromise<AssetAddResponse> {
    const { catalog_id, Authorization, 'X-API-Key': xAPIKey, ...body } = params;
    return this._client.put(path`/v2/catalogs/${catalog_id}/albums/${albumID}/assets`, {
      body,
      ...options,
      headers: buildHeaders([{ Authorization: Authorization, 'X-API-Key': xAPIKey }, options?.headers]),
    });
  }
}

export interface AssetListResponse {
  /**
   * Contains details of the album whose assets are being fetched
   */
  album?: AssetListResponse.Album;

  /**
   * Base URL that can be prepended to the 'href' values in the 'links' to produce
   * fully qualified URLs for future queries.
   */
  base?: string;

  links?: unknown;

  resources?: Array<AssetListResponse.Resource>;
}

export namespace AssetListResponse {
  /**
   * Contains details of the album whose assets are being fetched
   */
  export interface Album {
    id?: UuidAPI.Uuid;

    links?: unknown;
  }

  export interface Resource {
    id?: UuidAPI.Uuid;

    asset?: Resource.Asset;

    /**
     * datetime in RFC-3339 format (subset of ISO-8601) requiring a UTC time ending
     * with Z (so -00:00 or +00-00 suffix NOT allowed). The datetime must have date and
     * time, including seconds, e.g. 2016-01-15T09:23:34Z.
     */
    created?: UtcDateTimeAPI.UtcDateTime;

    links?: unknown;

    type?: 'album_asset';

    /**
     * datetime in RFC-3339 format (subset of ISO-8601) requiring a UTC time ending
     * with Z (so -00:00 or +00-00 suffix NOT allowed). The datetime must have date and
     * time, including seconds, e.g. 2016-01-15T09:23:34Z.
     */
    updated?: UtcDateTimeAPI.UtcDateTime;
  }

  export namespace Resource {
    export interface Asset {
      id?: UuidAPI.Uuid;

      links?: unknown;

      payload?: unknown;
    }
  }
}

export interface AssetAddResponse {
  /**
   * Base URL that can be prepended to the 'href' values in the 'links' to produce
   * fully qualified URLs for future queries.
   */
  base?: string;

  errors?: Array<AssetAddResponse.Error>;

  resources?: Array<AssetAddResponse.Resource>;
}

export namespace AssetAddResponse {
  export interface Error {
    id?: UuidAPI.Uuid;

    code?: number;

    description?: string;

    errors?: Error.Errors;

    http_status?: number;

    subtype?: string;
  }

  export namespace Error {
    export interface Errors {
      asset?: Array<string>;
    }
  }

  export interface Resource {
    id?: UuidAPI.Uuid;

    href?: string;
  }
}

export interface AssetListParams {
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
   * Query param: When album_filters is set to 'true', it filters out all the album
   * assets based on the presentation filters set on the album. With this parameter,
   * rejected assets always get filtered out irrespective of settings in presentation
   * filters. Presentation filters are not applied when any value other than 'true'
   * is set for album_filters. Default behavior is to display all assets. This
   * parameter cannot be used along with flag parameter. no Response: 200 OK
   */
  album_filters?: string;

  /**
   * Query param: Set of 1 - 100 comma separated asset_id values. Other parameters
   * can not be used in conjunction with this parameter.
   */
  asset_ids?: string;

  /**
   * Query param: Used to request assets captured after a given time. captured_after
   * will be found in the "links.prev.href" link. If no links.prev is included in a
   * listing response, this is a hint from the server that there are no assets in the
   * catalog with a date captured_after the first asset in the list (the client has
   * reached the "top" of the list). Note: assets imported without a captureDate
   * payload property default to the value "0000-00-00T00:00:00". To list these
   * assets set captured_after to "-0001-12-31T23:59:59". captured_after may not be
   * used in conjunction with captured_before.
   */
  captured_after?: string;

  /**
   * Query param: Used to request assets captured before a given time.
   * captured_before will be found in the "links.next.href" link. If no links.next is
   * included in a listing response, this is a hint from the server that there are no
   * assets in the catalog with a date captured_before the last asset in the list
   * (the client has reached the "bottom" of the list). captured_before may not be
   * used in conjunction with captured_after.
   */
  captured_before?: string;

  /**
   * Query param: Semicolon-delimited list of additional data to include. When the
   * list includes "asset", the asset subdocuments contains all the fields.
   * Otherwise, only the id and self href link are returned in the asset
   * subdocuments.
   */
  embed?: string;

  /**
   * Query param: Used to request the list for different types of assets excluding
   * incomplete or complete image and video assets. The valid values are "incomplete"
   * and "complete". An image or video asset is considered to be complete if its
   * proxy or original upload exists. An asset of subtypes profile, preset,
   * camera_profile or lens_profile is considered complete if its original upload
   * exists.
   */
  exclude?: string;

  /**
   * Query param: Semi-colon separated review flag values used to filter assets
   * returned. Can be combined with subtype filter. Valid values for flags are
   * 'pick', 'unflagged' and 'reject'. This parameter cannot be used along with
   * album_filters parameter. Default behavior is to display all assets.
   */
  flag?: string;

  /**
   * Query param: To show or hide assets inside stacks in the catalog. If
   * hide_stacked_assets is passed as true, assets inside stacks won't be returned.
   * Default value is false.
   */
  hide_stacked_assets?: boolean;

  /**
   * Query param: Number of assets to return. Default value is 100. Maximum is 500.
   * Please note that the response may contain more than 'limit' number of assets
   * returned if the assets at the 'limit' boundary has the same capture_date. For
   * example if there are 5 assets in a catalog and the 3rd, 4th and 5th assets all
   * have the same capture dates the response will contain all 5 assets whether
   * 'limit' is 3, 4 or 5.
   */
  limit?: number;

  /**
   * Query param: Used to request assets having order value greater than specified
   * value. Next and previous pages will be found in the "links.next.href" and
   * "links.prev.href" links respectively. If next/prev link is missing, it indicates
   * that there is no next/prev page. Some rules about using order_after: 1) Specify
   * "-" to get the first page. 2) Can be max of 1024 characters. 3) Should be a
   * lex64 sort order string with characters in the set: [-0-9A-Z_a-z] with sort
   * order in the same sequence as in the set [-0-9A-Z_a-z]. 4) captured_before
   * cannot be used with order_after 5) captured_after can be used only if
   * order_after==""
   */
  order_after?: string;

  /**
   * Query param: Used to request assets having order value lesser than specified
   * value. Next and previous pages will be found in the "links.next.href" and
   * "links.prev.href" links respectively. If next/prev link is missing, it indicates
   * that there is no next/prev page. Some rules about using order_before: 1) Specify
   * order_before as "" and captured_before as a future date to get the first
   * page. 2) Can be max of 1024 characters. 3) Should be a lex64 sort order string
   * with characters in the set: [-0-9A-Z_a-z] with sort order in the same sequence
   * as in the set [-0-9A-Z_a-z]. 4) captured_after cannot be used with
   * order_before 5) captured_before can be used only if order_before==""
   */
  order_before?: string;

  /**
   * Query param: Semi-colon separated asset subtype values.
   */
  subtype?: string;
}

export interface AssetAddParams {
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
  resources?: Array<AssetAddParams.Resource>;
}

export namespace AssetAddParams {
  export interface Resource {
    /**
     * UUID of the asset to be added to the album.
     */
    id?: UuidAPI.Uuid;

    payload?: Resource.Payload;
  }

  export namespace Resource {
    export interface Payload {
      /**
       * Whether this asset should be used as the album cover.
       */
      cover?: boolean;

      order?: string;

      publishInfo?: Payload.PublishInfo;
    }

    export namespace Payload {
      export interface PublishInfo {
        /**
         * Identifier for the album asset that is unique to the publishing service.
         */
        remoteId?: string;

        /**
         * Album asset metadata, unique to the service, encapsulated as a single string
         * with a maximum length of 1024 characters.
         */
        servicePayload?: string;
      }
    }
  }
}

export declare namespace Assets {
  export {
    type AssetListResponse as AssetListResponse,
    type AssetAddResponse as AssetAddResponse,
    type AssetListParams as AssetListParams,
    type AssetAddParams as AssetAddParams,
  };
}
