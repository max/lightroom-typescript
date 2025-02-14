// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Renditions extends APIResource {
  /**
   * Get latest asset rendition of specified type. It returns 404 if rendition does
   * not exist. It returns 404 in another case when rendition is invalid (only for
   * rendition type 2560 and fullsize)
   */
  retrieve(
    renditionType: string,
    params: RenditionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { catalog_id, asset_id, Authorization, 'X-API-Key': xAPIKey } = params;
    return this._client.get(path`/v2/catalogs/${catalog_id}/assets/${asset_id}/renditions/${renditionType}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', Authorization: Authorization, 'X-API-Key': xAPIKey },
        options?.headers,
      ]),
    });
  }

  /**
   * Generate renditions for an original file asynchronously. Allowed rendition types
   * are fullsize and 2560. Generated rendition will be deleted after 1 day
   * automatically.
   */
  generate(
    assetID: string,
    params: RenditionGenerateParams,
    options?: RequestOptions,
  ): APIPromise<RenditionGenerateResponse> {
    const {
      catalog_id,
      Authorization,
      'X-API-Key': xAPIKey,
      'X-Generate-Renditions': xGenerateRenditions,
    } = params;
    return this._client.post(path`/v2/catalogs/${catalog_id}/assets/${assetID}/renditions`, {
      ...options,
      headers: buildHeaders([
        { Authorization: Authorization, 'X-API-Key': xAPIKey, 'X-Generate-Renditions': xGenerateRenditions },
        options?.headers,
      ]),
    });
  }
}

export interface RenditionGenerateResponse {
  /**
   * Base URL that can be prepended to the 'href' values in the 'links' to produce
   * fully qualified URLs for future queries.
   */
  base?: string;

  links?: unknown;
}

export interface RenditionRetrieveParams {
  /**
   * Path param: Identifier of the catalog in which asset exists.
   */
  catalog_id: string;

  /**
   * Path param: Identifier of the asset for which to fetch rendition.
   */
  asset_id: string;

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

export interface RenditionGenerateParams {
  /**
   * Path param: Identifier of the catalog in which the asset was created.
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
   * Header param: One or multiple of the supported rendition types separated by ','.
   * Supported rendition types are : ['fullsize', '2560'].
   */
  'X-Generate-Renditions': string;
}

export declare namespace Renditions {
  export {
    type RenditionGenerateResponse as RenditionGenerateResponse,
    type RenditionRetrieveParams as RenditionRetrieveParams,
    type RenditionGenerateParams as RenditionGenerateParams,
  };
}
