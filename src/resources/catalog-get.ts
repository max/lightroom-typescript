// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as UtcDateTimeAPI from './utc-date-time';
import * as UuidAPI from './uuid';
import { APIPromise } from '../api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class CatalogGet extends APIResource {
  /**
   * A catalog is the topmost container of resources for a user. Each catalog
   * contains zero or more assets, albums, or other resources.
   */
  catalogGet(
    params: CatalogGetCatalogGetParams,
    options?: RequestOptions,
  ): APIPromise<CatalogGetCatalogGetResponse> {
    const { Authorization, 'X-API-Key': xAPIKey } = params;
    return this._client.get('/v2/catalog', {
      ...options,
      headers: buildHeaders([{ Authorization: Authorization, 'X-API-Key': xAPIKey }, options?.headers]),
    });
  }
}

export interface CatalogGetCatalogGetResponse {
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

  payload?: CatalogGetCatalogGetResponse.Payload;

  subtype?: 'lightroom';

  type?: 'catalog';

  /**
   * datetime in RFC-3339 format (subset of ISO-8601) requiring a UTC time ending
   * with Z (so -00:00 or +00-00 suffix NOT allowed). The datetime must have date and
   * time, including seconds, e.g. 2016-01-15T09:23:34Z.
   */
  updated?: UtcDateTimeAPI.UtcDateTime;
}

export namespace CatalogGetCatalogGetResponse {
  export interface Payload {
    name: string;

    assetSortOrder?:
      | 'captureDateAsc'
      | 'captureDateDesc'
      | 'importTimestampAsc'
      | 'importTimestampDesc'
      | 'fileNameAsc'
      | 'fileNameDesc'
      | 'ratingAsc'
      | 'ratingDesc'
      | 'userUpdatedAsc'
      | 'userUpdatedDesc';

    presets?: Payload.Presets;

    profiles?: Payload.Profiles;

    settings?: Payload.Settings;

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

  export namespace Payload {
    export interface Presets {
      favorites?: unknown;
    }

    export interface Profiles {
      favorites?: unknown;
    }

    export interface Settings {
      desktop?: Record<string, unknown>;

      mobile?: Record<string, unknown>;

      photosdk?: Record<string, unknown>;

      universal?: Settings.Universal;

      web?: Record<string, unknown>;
    }

    export namespace Settings {
      export interface Universal {
        connections?: unknown;
      }
    }
  }
}

export interface CatalogGetCatalogGetParams {
  /**
   * Bearer [token] - User access token of an authenticated Lightroom customer
   */
  Authorization: string;

  /**
   * Client ID (API Key) which is subscribed to the Lightroom APIs through
   * console.adobe.io
   */
  'X-API-Key': string;
}

export declare namespace CatalogGet {
  export {
    type CatalogGetCatalogGetResponse as CatalogGetCatalogGetResponse,
    type CatalogGetCatalogGetParams as CatalogGetCatalogGetParams,
  };
}
