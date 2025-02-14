// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as UtcDateTimeAPI from '../../utc-date-time';
import * as UuidAPI from '../../uuid';
import * as RenditionsAPI from './renditions';
import {
  RenditionGenerateParams,
  RenditionGenerateResponse,
  RenditionRetrieveParams,
  Renditions,
} from './renditions';
import * as XmpAPI from './xmp/xmp';
import { Xmp } from './xmp/xmp';
import { APIPromise } from '../../../api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Assets extends APIResource {
  renditions: RenditionsAPI.Renditions = new RenditionsAPI.Renditions(this._client);
  xmp: XmpAPI.Xmp = new XmpAPI.Xmp(this._client);

  /**
   * Create a new asset with initial metadata and import information.
   */
  create(assetID: string, params: AssetCreateParams, options?: RequestOptions): APIPromise<void> {
    const { catalog_id, Authorization, 'X-API-Key': xAPIKey, ...body } = params;
    return this._client.put(path`/v2/catalogs/${catalog_id}/assets/${assetID}`, {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', Authorization: Authorization, 'X-API-Key': xAPIKey },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves information about a single asset in a catalog that the caller owns.
   * Successful response may also return invalid flag in the rendition link for the
   * asset. A rendition becomes invalid when an asset is edited after rendition has
   * been generated. New renditions (only 2560 and fullsize) can be generated via
   * Generate Renditions API. The read xmp/develop link in the response will have the
   * invalid flag as true if asset with SHA256 has been created but external
   * xmp/develop has not been uploaded yet.
   */
  retrieve(
    assetID: string,
    params: AssetRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AssetRetrieveResponse> {
    const { catalog_id, Authorization, 'X-API-Key': xAPIKey } = params;
    return this._client.get(path`/v2/catalogs/${catalog_id}/assets/${assetID}`, {
      ...options,
      headers: buildHeaders([{ Authorization: Authorization, 'X-API-Key': xAPIKey }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of existing assets that caller owns. Successful response may
   * also return invalid flag in the rendition link for the asset. A rendition
   * becomes invalid when an asset is edited after rendition has been generated. New
   * renditions (only 2560 and fullsize) can be generated via Generate Renditions
   * API. The read xmp/develop link in the response will have the invalid flag as
   * true if asset with SHA256 has been created but external xmp/develop has not been
   * uploaded yet.
   */
  list(catalogID: string, params: AssetListParams, options?: RequestOptions): APIPromise<AssetListResponse> {
    const { Authorization, 'X-API-Key': xAPIKey, ...query } = params;
    return this._client.get(path`/v2/catalogs/${catalogID}/assets`, {
      query,
      ...options,
      headers: buildHeaders([{ Authorization: Authorization, 'X-API-Key': xAPIKey }, options?.headers]),
    });
  }

  /**
   * Create and upload an original file for the asset. Up to 200 MB may be uploaded
   * per invocation, and larger files may be uploaded by calling this API multiple
   * times with Content-Range headers for each part. When all parts are received the
   * upload will be consolidated asynchronously. All partial uploads should include
   * optional rendition type parameters to ensure the last part received has the
   * necessary options for request post-processing.
   */
  createMaster(assetID: string, params: AssetCreateMasterParams, options?: RequestOptions): APIPromise<void> {
    const { catalog_id, Authorization, 'X-API-Key': xAPIKey, 'Content-Range': contentRange } = params;
    return this._client.put(path`/v2/catalogs/${catalog_id}/assets/${assetID}/master`, {
      ...options,
      headers: buildHeaders([
        {
          Accept: '*/*',
          Authorization: Authorization,
          'X-API-Key': xAPIKey,
          ...(contentRange != null ? { 'Content-Range': contentRange } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export type AssetRetrieveResponse =
  | AssetRetrieveResponse.SuccessImageAsset
  | AssetRetrieveResponse.SuccessVideoAsset;

export namespace AssetRetrieveResponse {
  export interface SuccessImageAsset {
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

    type?: 'asset';

    /**
     * datetime in RFC-3339 format (subset of ISO-8601) requiring a UTC time ending
     * with Z (so -00:00 or +00-00 suffix NOT allowed). The datetime must have date and
     * time, including seconds, e.g. 2016-01-15T09:23:34Z.
     */
    updated?: UtcDateTimeAPI.UtcDateTime;
  }

  export interface SuccessVideoAsset {
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

    favorites?: SuccessVideoAsset.Favorites;

    fingerprint?: unknown;

    links?: unknown;

    payload?: unknown;

    subtype?: string;

    type?: 'asset';

    /**
     * datetime in RFC-3339 format (subset of ISO-8601) requiring a UTC time ending
     * with Z (so -00:00 or +00-00 suffix NOT allowed). The datetime must have date and
     * time, including seconds, e.g. 2016-01-15T09:23:34Z.
     */
    updated?: UtcDateTimeAPI.UtcDateTime;
  }

  export namespace SuccessVideoAsset {
    export interface Favorites {
      /**
       * datetime in RFC-3339 format (subset of ISO-8601) requiring a UTC time ending
       * with Z (so -00:00 or +00-00 suffix NOT allowed). The datetime must have date and
       * time, including seconds, e.g. 2016-01-15T09:23:34Z.
       */
      account_id?: UtcDateTimeAPI.UtcDateTime;
    }
  }
}

export type AssetListResponse = AssetListResponse.Success | AssetListResponse.SuccessAssetIDsQueryParam;

export namespace AssetListResponse {
  export interface Success {
    /**
     * Base URL that can be prepended to the 'href' values in the 'links' to produce
     * fully qualified URLs for future queries.
     */
    base?: string;

    resources?: Array<Success.Resource>;
  }

  export namespace Success {
    export interface Resource {
      id?: UuidAPI.Uuid;

      /**
       * datetime in RFC-3339 format (subset of ISO-8601) requiring a UTC time ending
       * with Z (so -00:00 or +00-00 suffix NOT allowed). The datetime must have date and
       * time, including seconds, e.g. 2016-01-15T09:23:34Z.
       */
      created?: UtcDateTimeAPI.UtcDateTime;

      links?: unknown;

      payload?: unknown;

      subtype?: string;

      type?: 'asset';

      /**
       * datetime in RFC-3339 format (subset of ISO-8601) requiring a UTC time ending
       * with Z (so -00:00 or +00-00 suffix NOT allowed). The datetime must have date and
       * time, including seconds, e.g. 2016-01-15T09:23:34Z.
       */
      updated?: UtcDateTimeAPI.UtcDateTime;
    }
  }

  export interface SuccessAssetIDsQueryParam {
    /**
     * Base URL that can be prepended to the 'href' values in the 'links' to produce
     * fully qualified URLs for future queries.
     */
    base?: string;

    errors?: Array<SuccessAssetIDsQueryParam.Error>;

    links?: unknown;

    resources?: Array<SuccessAssetIDsQueryParam.Resource>;
  }

  export namespace SuccessAssetIDsQueryParam {
    export interface Error {
      id?: UuidAPI.Uuid;

      code?: number;

      description?: string;
    }

    export interface Resource {
      id?: UuidAPI.Uuid;

      /**
       * datetime in RFC-3339 format (subset of ISO-8601) requiring a UTC time ending
       * with Z (so -00:00 or +00-00 suffix NOT allowed). The datetime must have date and
       * time, including seconds, e.g. 2016-01-15T09:23:34Z.
       */
      created?: UtcDateTimeAPI.UtcDateTime;

      links?: unknown;

      payload?: unknown;

      subtype?: string;

      type?: 'asset';

      /**
       * datetime in RFC-3339 format (subset of ISO-8601) requiring a UTC time ending
       * with Z (so -00:00 or +00-00 suffix NOT allowed). The datetime must have date and
       * time, including seconds, e.g. 2016-01-15T09:23:34Z.
       */
      updated?: UtcDateTimeAPI.UtcDateTime;
    }
  }
}

export interface AssetCreateParams {
  /**
   * Path param: Identifier of the catalog in which the asset will be created.
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
  payload?: AssetCreateParams.Payload;

  /**
   * Body param:
   */
  subtype?: 'image' | 'video';
}

export namespace AssetCreateParams {
  export interface Payload {
    /**
     * Capture date of the asset in ISO-8601 format. Will be populated by the server
     * automatically from the master if set to '0000-00-00T00:00:00'
     */
    captureDate?: '0000-00-00T00:00:00' | 'iso8601DateTime';

    importSource?: Payload.ImportSource;

    /**
     * datetime in ISO-8601 format (e.g. 2016-01-15T16:18:00-05:00) with both date and
     * time required, including seconds, but timezone optional. Also flexible on
     * allowing some nonstandard timezone formats like 2016-01-15T12:10:32+0000 or
     * 2016-01-15T12:10:32-05.
     */
    userCreated?: string;

    /**
     * datetime in ISO-8601 format (e.g. 2016-01-15T16:18:00-05:00) with both date and
     * time required, including seconds, but timezone optional. Also flexible on
     * allowing some nonstandard timezone formats like 2016-01-15T12:10:32+0000 or
     * 2016-01-15T12:10:32-05.
     */
    userUpdated?: string;
  }

  export namespace Payload {
    export interface ImportSource {
      fileName: string;

      /**
       * Account ID of the user who imported the asset.
       */
      importedBy: string;

      /**
       * Name of the device that imported the image.
       */
      importedOnDevice: string;

      /**
       * datetime in ISO-8601 format (e.g. 2016-01-15T16:18:00-05:00) with both date and
       * time required, including seconds, but timezone optional. Also flexible on
       * allowing some nonstandard timezone formats like 2016-01-15T12:10:32+0000 or
       * 2016-01-15T12:10:32-05.
       */
      importTimestamp: string;
    }
  }
}

export interface AssetRetrieveParams {
  /**
   * Path param: Identifier of the catalog
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

export interface AssetListParams {
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
   * Query param: Used to request the list for different types of assets excluding
   * incomplete or complete image and video assets. The valid values are "incomplete"
   * and "complete". An image or video asset is considered to be complete if its
   * proxy or original upload exists. An asset of subtypes profile, preset,
   * camera_profile or lens_profile is considered complete if its original upload
   * exists.
   */
  exclude?: string;

  /**
   * Query param: Favorite status, subtype parameter of "preset" is required when
   * using this parameter.
   */
  favorite?: string;

  /**
   * Query param: Semi-colon separated group values. Subtype parameter of "preset" or
   * "profile" is required when using this parameter.
   */
  group?: string;

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
   * Query param: Semi-colon separated name values. Subtype parameter of "preset" or
   * "profile" is required when using this parameter.
   */
  name?: string;

  /**
   * Query param: SHA256 hash value of original file. Assets with a matching SHA256
   * hash will be returned. May be used in conjunction with subtype.
   */
  sha256?: string;

  /**
   * Query param: Semi-colon separated asset subtype values.
   */
  subtype?: string;

  /**
   * Query param: Starting timestamp
   */
  updated_since?: string;
}

export interface AssetCreateMasterParams {
  /**
   * Path param: Identifier of the catalog in which the asset will be created.
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
   * Header param: Byte range for the request, including first and last bytes and
   * entity length as defined in RFC 2616. Should be included only when the data
   * cannot be uploaded in a single call.
   */
  'Content-Range'?: string;
}

Assets.Renditions = Renditions;
Assets.Xmp = Xmp;

export declare namespace Assets {
  export {
    type AssetRetrieveResponse as AssetRetrieveResponse,
    type AssetListResponse as AssetListResponse,
    type AssetCreateParams as AssetCreateParams,
    type AssetRetrieveParams as AssetRetrieveParams,
    type AssetListParams as AssetListParams,
    type AssetCreateMasterParams as AssetCreateMasterParams,
  };

  export {
    Renditions as Renditions,
    type RenditionGenerateResponse as RenditionGenerateResponse,
    type RenditionRetrieveParams as RenditionRetrieveParams,
    type RenditionGenerateParams as RenditionGenerateParams,
  };

  export { Xmp as Xmp };
}
