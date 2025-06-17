export interface SocialLink {
  platform: string;
  username: string;
  followers: string;
  url: string;
}

export interface HeroSection {
  enabled: boolean;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  cta1Text: string;
  cta2Text: string;
}

export interface AboutSection {
  enabled: boolean;
  title: string;
  description: string;
  image: string;
  altText?: string;
  showSocialStats: boolean;
}

export interface MerchItem {
  image1: string;
  image2: string;
  title: string;
  description: string;
  buyLink: string;
  ctaText: string;
}

export interface FeaturedMerch {
  enabled: boolean;
  title: string;
  description: string;
  items: MerchItem[];
}

export interface PartnershipSection {
  enabled: boolean;
  title: string;
  description: string;
  image: string;
  altText?: string;
  stats: string[];
  ctaText: string;
}

export interface StorefrontItem {
  label: string;
  linkTo: string;
  image: string;
  description?: string;
  linkLabel: string;
}

export interface StorefrontsSection {
  enabled: boolean;
  title: string;
  description: string;
  items: StorefrontItem[];
}

export interface HomeData {
  enabled: boolean;
  hero: HeroSection;
  about: AboutSection;
  featuredMerch: FeaturedMerch;
  partnerships: PartnershipSection;
  storefronts: StorefrontsSection;
  developerSettings: {
    warning: string;
    experimentalFeatureToggle: boolean;
  };
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  link: string;
}

export interface ProductCategoryData {
  enabled: boolean;
  title: string;
  description: string;
  categoryLink: string;
  products: Product[];
}

export interface Banner {
  enabled: boolean;
  title: string;
  description: string;
  imageUrl: string;
  altText?: string;
  storeLink: string;
  buttonText: string;
}

export interface StorefrontData {
  enabled: boolean;
  pageTitle: string;
  introText: string;
  banner: Banner;
  categories: ProductCategoryData[];
  developerSettings: {
    warning: string;
    experimentalFeatureToggle: boolean;
  };
}

export interface MerchandiseItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  buyLink: string;
  shopifyProductId?: string;
}

export interface LinksData {
  enabled: boolean;
  pageTitle: string;
  introText: string;
  socialLinks: SocialLink[];
  reasonBlock: {
    enabled: boolean;
    title: string;
    paragraphs: { text: string }[];
  };
}

export interface TemplateData {
  enabled: boolean;
  title: string;
  intro?: string;
  body?: string;
  ctaText?: string;
  ctaLink?: string;
  developerSettings?: {
    warning: string;
    experimentalFeatureToggle: boolean;
  };
}

export interface SocialStats {
  tiktok_followers: string;
  instagram_followers: string;
  youtube_followers: string;
}