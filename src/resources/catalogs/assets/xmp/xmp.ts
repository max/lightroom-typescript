// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as DevelopAPI from './develop';
import { Develop, DevelopCreateParams, DevelopRetrieveParams } from './develop';

export class Xmp extends APIResource {
  develop: DevelopAPI.Develop = new DevelopAPI.Develop(this._client);
}

Xmp.Develop = Develop;

export declare namespace Xmp {
  export {
    Develop as Develop,
    type DevelopCreateParams as DevelopCreateParams,
    type DevelopRetrieveParams as DevelopRetrieveParams,
  };
}
