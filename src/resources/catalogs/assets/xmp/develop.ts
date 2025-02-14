// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { APIPromise } from '../../../../api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Develop extends APIResource {
  /**
   * This API support two workflows. The first workflow is to upload external XMP
   * develop settings file for the asset. Content-type header for this case is
   * application/rdf+xml. The second workflow is to create an external XMP develop
   * settings file by copying from another asset's external xmp develop setting file.
   * Content-type header for this case is application/json.
   */
  create(assetID: string, params: DevelopCreateParams, options?: RequestOptions): APIPromise<void> {
    const { catalog_id, Authorization, 'X-API-Key': xAPIKey, ...body } = params;
    return this._client.put(path`/v2/catalogs/${catalog_id}/assets/${assetID}/xmp/develop`, {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', Authorization: Authorization, 'X-API-Key': xAPIKey },
        options?.headers,
      ]),
    });
  }

  /**
   * Get latest asset external xmp develop setting file
   */
  retrieve(assetID: string, params: DevelopRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { catalog_id, Authorization, 'X-API-Key': xAPIKey } = params;
    return this._client.get(path`/v2/catalogs/${catalog_id}/assets/${assetID}/xmp/develop`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', Authorization: Authorization, 'X-API-Key': xAPIKey },
        options?.headers,
      ]),
    });
  }
}

export interface DevelopCreateParams {
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
   * Body param: External xmp/develop link of source asset.
   */
  file_href?: string;
}

export interface DevelopRetrieveParams {
  /**
   * Path param: Identifier of the catalog in which asset exists.
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

export declare namespace Develop {
  export {
    type DevelopCreateParams as DevelopCreateParams,
    type DevelopRetrieveParams as DevelopRetrieveParams,
  };
}
