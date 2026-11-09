/**
 * Local image registry with Unsplash attribution.
 * Photos downloaded under the Unsplash License:
 * https://unsplash.com/license
 */

export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  photographer: string;
  unsplashUrl: string;
};

export const siteImages = {
  hero: {
    src: "/images/hero.jpg",
    alt: "Candlelit dining table prepared for an elegant restaurant service",
    width: 2400,
    height: 1600,
    photographer: "Jay Wennington",
    unsplashUrl: "https://unsplash.com/photos/nG0rq-7WqLs",
  },
  intro: {
    src: "/images/intro.jpg",
    alt: "Warm restaurant dining room with soft lighting",
    width: 1800,
    height: 1350,
    photographer: "Davey Heuser",
    unsplashUrl: "https://unsplash.com/photos/kLMT6XyZjnA",
  },
  menu: {
    src: "/images/menu-atmosphere.jpg",
    alt: "Artfully plated dishes on a dark table surface",
    width: 1800,
    height: 1200,
    photographer: "Brooke Lark",
    unsplashUrl: "https://unsplash.com/photos/08bOYnH_r_E",
  },
  cta: {
    src: "/images/cta-atmosphere.jpg",
    alt: "Intimate restaurant table setting with warm ambient light",
    width: 2000,
    height: 1333,
    photographer: "Primož Cigler",
    unsplashUrl: "https://unsplash.com/photos/jISL8or26wA",
  },
  gallery: [
    {
      src: "/images/gallery-01.jpg",
      alt: "Busy restaurant interior with ambient evening light",
      width: 1600,
      height: 1067,
      photographer: "Nick Karvounis",
      unsplashUrl: "https://unsplash.com/photos/Ciqxn7FEHfs",
    },
    {
      src: "/images/gallery-02.jpg",
      alt: "Fresh seafood plated for service",
      width: 1600,
      height: 2400,
      photographer: "Jennifer Schmidt",
      unsplashUrl: "https://unsplash.com/photos/Q2idjb2qenk",
    },
    {
      src: "/images/gallery-03.jpg",
      alt: "Colorful Mediterranean salad bowl",
      width: 1600,
      height: 2400,
      photographer: "Brooke Lark",
      unsplashUrl: "https://unsplash.com/photos/akwA-GDIER4",
    },
    {
      src: "/images/gallery-04.jpg",
      alt: "Wine glasses on a refined dining table",
      width: 1600,
      height: 1069,
      photographer: "Kelsey Knight",
      unsplashUrl: "https://unsplash.com/photos/udj2tD3WKsY",
    },
    {
      src: "/images/gallery-05.jpg",
      alt: "Close view of a carefully composed plated dish",
      width: 1200,
      height: 1600,
      photographer: "Jay Wennington",
      unsplashUrl: "https://unsplash.com/photos/nG0rq-7WqLs",
    },
    {
      src: "/images/gallery-06.jpg",
      alt: "Steak and sides presented on a white plate",
      width: 1600,
      height: 1067,
      photographer: "Emiliano Vittoriosi",
      unsplashUrl: "https://unsplash.com/photos/OFismyezPnY",
    },
  ],
} as const satisfies Record<string, SiteImage | readonly SiteImage[]>;
