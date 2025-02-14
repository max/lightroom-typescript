// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class HealthGet extends APIResource {
  /**
   * Will return the Lightroom server version ID (a hexadecimal value not guaranteed
   * to be sequential) if the services are up.
   */
  healthGet(
    params: HealthGetHealthGetParams,
    options?: RequestOptions,
  ): APIPromise<HealthGetHealthGetResponse> {
    const { 'X-API-Key': xAPIKey } = params;
    return this._client.get('/v2/health', {
      ...options,
      headers: buildHeaders([{ 'X-API-Key': xAPIKey }, options?.headers]),
    });
  }
}

export interface HealthGetHealthGetResponse {
  version?: string;
}

export interface HealthGetHealthGetParams {
  /**
   * Client ID (API Key) which is subscribed to the Lightroom APIs through
   * console.adobe.io
   */
  'X-API-Key': string;
}

export declare namespace HealthGet {
  export {
    type HealthGetHealthGetResponse as HealthGetHealthGetResponse,
    type HealthGetHealthGetParams as HealthGetHealthGetParams,
  };
}
