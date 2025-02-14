// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lightroom from 'lightroom';

const client = new Lightroom({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource albums', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.catalogs.albums.create('album_id', {
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
    const response = await client.catalogs.albums.create('album_id', {
      catalog_id: 'catalog_id',
      Authorization: 'Authorization',
      'X-API-Key': 'X-API-Key',
      payload: {
        cover: { id: '210b9798eb53baa4e69d31c1071cf03d' },
        name: 'name',
        parent: { id: '210b9798eb53baa4e69d31c1071cf03d' },
        publishInfo: {
          created: '8760-11-02T09:15:32Z',
          deleted: true,
          remoteId: 'remoteId',
          remoteLinks: { edit: { href: 'href' }, view: { href: 'href' } },
          servicePayload: 'servicePayload',
          updated: '8760-11-02T09:15:32Z',
        },
        userCreated: '8760-11-02T09:15:32Z',
        userUpdated: '8760-11-02T09:15:32Z',
      },
      serviceId: 'serviceId',
      subtype: 'project',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.catalogs.albums.retrieve('album_id', {
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
    const response = await client.catalogs.albums.retrieve('album_id', {
      catalog_id: 'catalog_id',
      Authorization: 'Authorization',
      'X-API-Key': 'X-API-Key',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.catalogs.albums.update('album_id', {
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
  test.skip('update: required and optional params', async () => {
    const response = await client.catalogs.albums.update('album_id', {
      catalog_id: 'catalog_id',
      Authorization: 'Authorization',
      'X-API-Key': 'X-API-Key',
      payload: {
        cover: { id: '210b9798eb53baa4e69d31c1071cf03d' },
        name: 'name',
        parent: { id: '210b9798eb53baa4e69d31c1071cf03d' },
        publishInfo: {
          created: '8760-11-02T09:15:32Z',
          deleted: true,
          remoteId: 'remoteId',
          remoteLinks: { edit: { href: 'href' }, view: { href: 'href' } },
          servicePayload: 'servicePayload',
          updated: '8760-11-02T09:15:32Z',
        },
        userCreated: '8760-11-02T09:15:32Z',
        userUpdated: '8760-11-02T09:15:32Z',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.catalogs.albums.list('catalog_id', {
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
    const response = await client.catalogs.albums.list('catalog_id', {
      Authorization: 'Authorization',
      'X-API-Key': 'X-API-Key',
      limit: 0,
      name_after: 'name_after',
      subtype: 'subtype',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.catalogs.albums.delete('album_id', {
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.catalogs.albums.delete('album_id', {
      catalog_id: 'catalog_id',
      Authorization: 'Authorization',
      'X-API-Key': 'X-API-Key',
      child_albums: 'child_albums',
    });
  });
});
