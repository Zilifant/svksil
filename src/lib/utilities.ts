// Utilities

import type {
  PageId,
  Animation,
  ContentfulData,
  ImageData,
  AssetRef,
  AssetData,
  CfItem,
} from '$lib/types';
import { marked } from 'marked';
import { bio, pageIds, pages } from '$lib/constants';
import { browser } from '$app/environment';

// Random Quote //

export function sample<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

// Fly Direction on Page Switch //

// Compare relative 'position' of pages to determine fly direction.
export function setFlyDirection(fromPgId: PageId, toPgId: PageId): Animation {
  const fromPgPos: number = pages.find((pg) => pg.id === fromPgId)?.pos || 0;
  const toPgPos: number = pages.find((pg) => pg.id === toPgId)?.pos || 1;

  return fromPgPos > toPgPos ? 'flyRight' : 'flyLeft';
}

// Identify Initial Page //

export function setInitialPageId(routeId: string | null): PageId {
  if (!routeId) return bio;
  const id = routeId.slice(1);
  if (pageIds.includes(id)) return id;
  return bio;
}

// Convert Markdown to HTML //

export function parseMarkdown(text: string): string {
  if (!text) return '';
  const array: string[] = text?.split('\n');
  const html: string = array.reduce((prev, curr) => {
    return prev + marked.parse(curr);
  }, '');
  return html;
}

// Safari Nav Fix //

// TODO: Check if this is still needed with current version of Safari.
export function applySafariNavFix(): void {
  if (!browser) return;
  const prevPage = document.getElementsByClassName('prev');
  if (prevPage[0]) prevPage[0].classList.replace('prev', 'not-prev');
}

// Contentful Functions //

export function getAssetSeries(
  fid: string,
  field: string,
  data: ContentfulData,
) {
  const assetSeries: AssetData[] = [];
  const assetRefs = getItemField(fid, field, data);
  assetRefs.forEach((ref: AssetRef) => {
    assetSeries.push(getAsset(ref.sys.id, data));
  });
  return assetSeries;
}

function getAsset(id: string, data: ContentfulData) {
  return data?.includes?.Asset?.find(
    (asset: AssetRef) => asset?.sys?.id === id,
  );
}

export function getAssetUrl(title: string, data: ContentfulData): string {
  const ASSET_NOT_FOUND_URL = 'not found';
  const asset = data?.includes?.Asset?.find(
    (asset: AssetRef) => asset?.fields?.title === title,
  );
  if (!asset) return ASSET_NOT_FOUND_URL;
  return 'https:' + asset?.fields?.file?.url;
}

export function getImageSeries(imageSeries: any[], data: ContentfulData) {
  const images: ImageData[] = [];
  imageSeries.forEach((img) => {
    const imgData = getImage(img?.sys?.id, data);
    images.push(imgData);
  });
  return images;
}

export function getParsedImageSeriesData(fid: string, data: ContentfulData) {
  const series = getAssetSeries(fid, 'images', data);
  // console.log(series);
  return series.map((imgData) => parseImageData(imgData));
}

function parseImageData(data: CfItem): ImageData {
  return {
    url: 'https:' + data?.fields?.file?.url,
    title: data?.fields?.title,
    alt: data?.fields?.title,
    order: data?.fields?.order,
    description: data?.fields?.description,
    tags: data?.metadata?.tags.map((tag: any) => tag.sys.id),
  };
}

export function getImage(id: string, data: ContentfulData): ImageData {
  const asset = data?.includes?.Asset?.find(
    (asset: AssetRef) => asset?.sys?.id === id,
  );
  return {
    url: 'https:' + asset?.fields?.file?.url,
    title: asset?.fields?.title,
    alt: asset?.fields?.title,
  };
}

export function getItemField(
  fid: string,
  fieldName: string | null,
  data: ContentfulData,
) {
  const item = data?.items?.find((itm) => itm?.fields?.fid === fid);
  if (!fieldName) return item?.fields;
  return item?.fields?.[fieldName];
}

export function getItemById(id: string, data: ContentfulData) {
  return data?.items.find((itm) => itm?.sys?.id === id);
}

export function getItemsByContentType(
  contentType: string,
  data: ContentfulData,
) {
  const items = data?.items?.filter(
    (item) => item?.sys?.contentType?.sys?.id === contentType,
  );
  return items.reduce((prev, curr) => [...prev, curr.fields], []);
}

// export function getHeroImageUrl(projectId: string, data: ContentfulData) {
//   const id = getItemField(projectId, 'heroImage', data)?.sys?.id;
//   const asset = data?.includes?.Asset?.find(
//     (asset: ContentfulAsset) => asset?.sys?.id === id,
//   );
//   return 'https:' + asset?.fields?.file?.url;
// }
