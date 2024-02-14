function getImageURL(name: string) {
  return new URL(`../assets/${name}.svg`, import.meta.url).href;
}

export default getImageURL;