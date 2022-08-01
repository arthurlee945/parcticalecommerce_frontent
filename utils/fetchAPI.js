import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import qs from "qs";

export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  
  //Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ""}`)}`;
  const response =  await fetch(requestUrl, mergedOptions);
  if(!response.ok){
    try{
      console.error(response.statusText);
    }
    catch{
      throw new Error(`An error occured please try again`);
    }
  }
  const data = await response.json();
  return data;
}