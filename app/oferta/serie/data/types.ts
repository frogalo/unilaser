export type SeriesSpecRow = {
  label: string;
  values: string[];
  shared?: boolean;
};

export type SeriesData = {
  slug: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
  featureBadge: string;
  featureTitle: string;
  featureDescription: string;
  statValue: string;
  statLabel: string;
  statDescription: string;
  highlights: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  comparisonTitle: string;
  models: string[];
  specs: SeriesSpecRow[];
  components: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  gallery: Array<{
    src: string;
    alt: string;
    className: string;
  }>;
};
