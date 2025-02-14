// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lightroom from 'lightroom';

const client = new Lightroom({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource assets', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.catalogs.albums.assets.list('album_id', {
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
  test.skip('list: required and optional params', async () => {
    const response = await client.catalogs.albums.assets.list('album_id', {
      catalog_id: 'catalog_id',
      Authorization: 'Authorization',
      'X-API-Key': 'X-API-Key',
      album_filters: 'album_filters',
      asset_ids: 'asset_ids',
      captured_after: 'captured_after',
      captured_before: 'captured_before',
      embed: 'embed',
      exclude: 'exclude',
      flag: 'flag',
      hide_stacked_assets: true,
      limit: 0,
      order_after: 'order_after',
      order_before: 'order_before',
      subtype: 'subtype',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('add: only required params', async () => {
    const responsePromise = client.catalogs.albums.assets.add('album_id', {
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
  test.skip('add: required and optional params', async () => {
    const response = await client.catalogs.albums.assets.add('album_id', {
      catalog_id: 'catalog_id',
      Authorization: 'Authorization',
      'X-API-Key': 'X-API-Key',
      resources: [
        {
          id: '210b9798eb53baa4e69d31c1071cf03d',
          payload: {
            cover: true,
            order: 'order',
            publishInfo: { remoteId: 'remoteId', servicePayload: 'servicePayload' },
          },
        },
      ],
    });
  });
});
