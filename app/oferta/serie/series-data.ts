import { SeriesData } from "./data/types";
import { uniData } from "./data/uni";
import { series3015hData } from "./data/3015h";

export type { SeriesData, SeriesSpecRow } from "./data/types";

export const seriesCollection: Record<string, SeriesData> = {
  uni: uniData,
  "3015h": series3015hData,
};

export function getSeriesBySlug(slug: string) {
  return seriesCollection[slug];
}

export function getSeriesSlugs() {
  return Object.keys(seriesCollection);
}
