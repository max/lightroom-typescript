// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';

export class UtcDateTimeResource extends APIResource {}

/**
 * datetime in RFC-3339 format (subset of ISO-8601) requiring a UTC time ending
 * with Z (so -00:00 or +00-00 suffix NOT allowed). The datetime must have date and
 * time, including seconds, e.g. 2016-01-15T09:23:34Z.
 */
export type UtcDateTime = string;

export declare namespace UtcDateTimeResource {
  export { type UtcDateTime as UtcDateTime };
}
