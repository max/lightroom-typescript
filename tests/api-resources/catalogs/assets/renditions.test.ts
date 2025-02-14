// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lightroom from 'lightroom-ts';

const client = new Lightroom({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource renditions', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.catalogs.assets.renditions.retrieve('rendition_type', {
      catalog_id: 'catalog_id',
      asset_id: 'asset_id',
      Authorization: 'Authorization',
      'X-API-Key': 'X-API-Key',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.catalogs.assets.renditions.retrieve('rendition_type', {
      catalog_id: 'catalog_id',
      asset_id: 'asset_id',
      Authorization: 'Authorization',
      'X-API-Key': 'X-API-Key',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('generate: only required params', async () => {
    const responsePromise = client.catalogs.assets.renditions.generate('asset_id', {
      catalog_id: 'catalog_id',
      Authorization: 'Authorization',
      'X-API-Key': 'X-API-Key',
      'X-Generate-Renditions': 'X-Generate-Renditions',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('generate: required and optional params', async () => {
    const response = await client.catalogs.assets.renditions.generate('asset_id', {
      catalog_id: 'catalog_id',
      Authorization: 'Authorization',
      'X-API-Key': 'X-API-Key',
      'X-Generate-Renditions': 'X-Generate-Renditions',
    });
  });
});
