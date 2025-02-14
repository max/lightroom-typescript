// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lightroom from 'lightroom-ts';

const client = new Lightroom({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource assets', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.catalogs.assets.create('asset_id', {
      catalog_id: 'catalog_id',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.catalogs.assets.create('asset_id', {
      catalog_id: 'catalog_id',
      Authorization: 'Authorization',
      'X-API-Key': 'X-API-Key',
      payload: {
        captureDate: '0000-00-00T00:00:00',
        importSource: {
          fileName: 'fileName',
          importedBy: 'importedBy',
          importedOnDevice: 'importedOnDevice',
          importTimestamp: '8760-11-02T09:15:32',
        },
        userCreated: '8760-11-02T09:15:32',
        userUpdated: '8760-11-02T09:15:32',
      },
      subtype: 'image',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.catalogs.assets.retrieve('asset_id', {
      catalog_id: 'catalog_id',
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
    const response = await client.catalogs.assets.retrieve('asset_id', {
      catalog_id: 'catalog_id',
      Authorization: 'Authorization',
      'X-API-Key': 'X-API-Key',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.catalogs.assets.list('catalog_id', {
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
  test.skip('list: required and optional params', async () => {
    const response = await client.catalogs.assets.list('catalog_id', {
      Authorization: 'Authorization',
      'X-API-Key': 'X-API-Key',
      asset_ids: 'asset_ids',
      captured_after: 'captured_after',
      captured_before: 'captured_before',
      exclude: 'exclude',
      favorite: 'favorite',
      group: 'group',
      hide_stacked_assets: true,
      limit: 0,
      name: 'name',
      sha256: 'sha256',
      subtype: 'subtype',
      updated_since: 'updated_since',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('createMaster: only required params', async () => {
    const responsePromise = client.catalogs.assets.createMaster('asset_id', {
      catalog_id: 'catalog_id',
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
  test.skip('createMaster: required and optional params', async () => {
    const response = await client.catalogs.assets.createMaster('asset_id', {
      catalog_id: 'catalog_id',
      Authorization: 'Authorization',
      'X-API-Key': 'X-API-Key',
      'Content-Range': 'Content-Range',
    });
  });
});
