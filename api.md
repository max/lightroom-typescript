# HealthGet

Types:

- <code><a href="./src/resources/health-get.ts">HealthGetHealthGetResponse</a></code>

Methods:

- <code title="get /v2/health">client.healthGet.<a href="./src/resources/health-get.ts">healthGet</a>({ ...params }) -> HealthGetHealthGetResponse</code>

# AccountGet

Types:

- <code><a href="./src/resources/account-get.ts">AccountGetAccountGetResponse</a></code>

Methods:

- <code title="get /v2/account">client.accountGet.<a href="./src/resources/account-get.ts">accountGet</a>({ ...params }) -> AccountGetAccountGetResponse</code>

# CatalogGet

Types:

- <code><a href="./src/resources/catalog-get.ts">CatalogGetCatalogGetResponse</a></code>

Methods:

- <code title="get /v2/catalog">client.catalogGet.<a href="./src/resources/catalog-get.ts">catalogGet</a>({ ...params }) -> CatalogGetCatalogGetResponse</code>

# Catalogs

## Assets

Types:

- <code><a href="./src/resources/catalogs/assets/assets.ts">AssetRetrieveResponse</a></code>
- <code><a href="./src/resources/catalogs/assets/assets.ts">AssetListResponse</a></code>

Methods:

- <code title="put /v2/catalogs/{catalog_id}/assets/{asset_id}">client.catalogs.assets.<a href="./src/resources/catalogs/assets/assets.ts">create</a>(assetID, { ...params }) -> void</code>
- <code title="get /v2/catalogs/{catalog_id}/assets/{asset_id}">client.catalogs.assets.<a href="./src/resources/catalogs/assets/assets.ts">retrieve</a>(assetID, { ...params }) -> AssetRetrieveResponse</code>
- <code title="get /v2/catalogs/{catalog_id}/assets">client.catalogs.assets.<a href="./src/resources/catalogs/assets/assets.ts">list</a>(catalogID, { ...params }) -> AssetListResponse</code>
- <code title="put /v2/catalogs/{catalog_id}/assets/{asset_id}/master">client.catalogs.assets.<a href="./src/resources/catalogs/assets/assets.ts">createMaster</a>(assetID, { ...params }) -> void</code>

### Renditions

Types:

- <code><a href="./src/resources/catalogs/assets/renditions.ts">RenditionGenerateResponse</a></code>

Methods:

- <code title="get /v2/catalogs/{catalog_id}/assets/{asset_id}/renditions/{rendition_type}">client.catalogs.assets.renditions.<a href="./src/resources/catalogs/assets/renditions.ts">retrieve</a>(renditionType, { ...params }) -> void</code>
- <code title="post /v2/catalogs/{catalog_id}/assets/{asset_id}/renditions">client.catalogs.assets.renditions.<a href="./src/resources/catalogs/assets/renditions.ts">generate</a>(assetID, { ...params }) -> RenditionGenerateResponse</code>

### Xmp

#### Develop

Methods:

- <code title="put /v2/catalogs/{catalog_id}/assets/{asset_id}/xmp/develop">client.catalogs.assets.xmp.develop.<a href="./src/resources/catalogs/assets/xmp/develop.ts">create</a>(assetID, { ...params }) -> void</code>
- <code title="get /v2/catalogs/{catalog_id}/assets/{asset_id}/xmp/develop">client.catalogs.assets.xmp.develop.<a href="./src/resources/catalogs/assets/xmp/develop.ts">retrieve</a>(assetID, { ...params }) -> void</code>

## Albums

Types:

- <code><a href="./src/resources/catalogs/albums/albums.ts">AlbumPayload</a></code>
- <code><a href="./src/resources/catalogs/albums/albums.ts">AlbumRetrieveResponse</a></code>
- <code><a href="./src/resources/catalogs/albums/albums.ts">AlbumListResponse</a></code>

Methods:

- <code title="put /v2/catalogs/{catalog_id}/albums/{album_id}">client.catalogs.albums.<a href="./src/resources/catalogs/albums/albums.ts">create</a>(albumID, { ...params }) -> void</code>
- <code title="get /v2/catalogs/{catalog_id}/albums/{album_id}">client.catalogs.albums.<a href="./src/resources/catalogs/albums/albums.ts">retrieve</a>(albumID, { ...params }) -> AlbumRetrieveResponse</code>
- <code title="post /v2/catalogs/{catalog_id}/albums/{album_id}">client.catalogs.albums.<a href="./src/resources/catalogs/albums/albums.ts">update</a>(albumID, { ...params }) -> void</code>
- <code title="get /v2/catalogs/{catalog_id}/albums">client.catalogs.albums.<a href="./src/resources/catalogs/albums/albums.ts">list</a>(catalogID, { ...params }) -> AlbumListResponse</code>
- <code title="delete /v2/catalogs/{catalog_id}/albums/{album_id}">client.catalogs.albums.<a href="./src/resources/catalogs/albums/albums.ts">delete</a>(albumID, { ...params }) -> void</code>

### Assets

Types:

- <code><a href="./src/resources/catalogs/albums/assets.ts">AssetListResponse</a></code>
- <code><a href="./src/resources/catalogs/albums/assets.ts">AssetAddResponse</a></code>

Methods:

- <code title="get /v2/catalogs/{catalog_id}/albums/{album_id}/assets">client.catalogs.albums.assets.<a href="./src/resources/catalogs/albums/assets.ts">list</a>(albumID, { ...params }) -> AssetListResponse</code>
- <code title="put /v2/catalogs/{catalog_id}/albums/{album_id}/assets">client.catalogs.albums.assets.<a href="./src/resources/catalogs/albums/assets.ts">add</a>(albumID, { ...params }) -> AssetAddResponse</code>

# Uuid

Types:

- <code><a href="./src/resources/uuid.ts">Uuid</a></code>

# UtcDateTime

Types:

- <code><a href="./src/resources/utc-date-time.ts">UtcDateTime</a></code>
