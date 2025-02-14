// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as UtcDateTimeAPI from './utc-date-time';
import * as UuidAPI from './uuid';
import { APIPromise } from '../api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class AccountGet extends APIResource {
  /**
   * An account is associated with each Adobe customer and contains the personal
   * information and subscription status. This information can be obtained through
   * the authentication APIs and is provided by Lightroom as a convenience.
   */
  accountGet(
    params: AccountGetAccountGetParams,
    options?: RequestOptions,
  ): APIPromise<AccountGetAccountGetResponse> {
    const { Authorization, 'X-API-Key': xAPIKey } = params;
    return this._client.get('/v2/account', {
      ...options,
      headers: buildHeaders([{ Authorization: Authorization, 'X-API-Key': xAPIKey }, options?.headers]),
    });
  }
}

export interface AccountGetAccountGetResponse {
  id?: UuidAPI.Uuid;

  /**
   * Base URL that can be prepended to the 'href' values in the 'links' to produce
   * fully qualified URLs for future queries.
   */
  base?: string;

  config?: unknown;

  country?: string;

  /**
   * datetime in RFC-3339 format (subset of ISO-8601) requiring a UTC time ending
   * with Z (so -00:00 or +00-00 suffix NOT allowed). The datetime must have date and
   * time, including seconds, e.g. 2016-01-15T09:23:34Z.
   */
  created?: UtcDateTimeAPI.UtcDateTime;

  email?: string;

  entitlement?: AccountGetAccountGetResponse.Entitlement;

  first_name?: string;

  full_name?: string;

  last_name?: string;

  type?: 'account';

  /**
   * datetime in RFC-3339 format (subset of ISO-8601) requiring a UTC time ending
   * with Z (so -00:00 or +00-00 suffix NOT allowed). The datetime must have date and
   * time, including seconds, e.g. 2016-01-15T09:23:34Z.
   */
  updated?: UtcDateTimeAPI.UtcDateTime;

  wcd_guid?: string;
}

export namespace AccountGetAccountGetResponse {
  export interface Entitlement {
    current_subs?: unknown;

    deletion_date?: string;

    /**
     * The status can take on one of five values from created, trial, trial_expired,
     * subscriber, and subscriber_expired. The created status indicates the user has
     * not yet stepped into any Creative Cloud offering, whether trial or subscription.
     * It is a minimally-entitled Adobe ID.
     */
    status?: 'created' | 'trial' | 'trial_expired' | 'subscriber' | 'subscriber_expired';

    storage?: Entitlement.Storage;

    trial?: unknown;
  }

  export namespace Entitlement {
    export interface Storage {
      /**
       * Specifies the storage limit in bytes that is displayed to the user for this
       * account.
       */
      display_limit?: number;

      /**
       * Specifies the storage limit in bytes that should be enforced for this account.
       * It will always be greater than or equal to the display_limit.
       */
      limit?: number;

      /**
       * The size in bytes of content this account that count against the storage limit.
       */
      used?: number;

      /**
       * Value of used at which the client applications should start warning the user.
       * Absence indicates no warning should be given.
       */
      warn?: number;
    }
  }
}

export interface AccountGetAccountGetParams {
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

export declare namespace AccountGet {
  export {
    type AccountGetAccountGetResponse as AccountGetAccountGetResponse,
    type AccountGetAccountGetParams as AccountGetAccountGetParams,
  };
}
