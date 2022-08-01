import { getStrapiURL } from "./getStrapiAPI";

export function getStrapiMedia(media) {
  const { url } = media.attributes;

  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}