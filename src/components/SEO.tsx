import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  pageDescription?: string;
  slug: string;
  lang?: string;
}

export default function SEO({
  title,
  pageDescription,
  slug,
  lang = "en",
}: SEOProps) {
  const url = `${process.env.REACT_APP_FRONTEND_URL}${slug}`;
  const description =
    pageDescription || "ADS Staking Market Campaign built on AVALANCHE";
  const metaImages = {
    og: "asp-og-image-small.jpg",
    twitter: "asp-og-image-small.jpg",
  };
  const getMetaImageUrl = (image: string) => `${url}images/${image}`;

  return (
    <>
      <Helmet
        htmlAttributes={{ lang }}
        {...(title
          ? {
              titleTemplate: `%s — ADS Staking Platform`,
              title,
            }
          : {
              title: `ADS Staking Platform`,
            })}
        meta={[
          {
            name: "description",
            content: description,
          },
          {
            property: "og:url",
            content: url,
          },
          {
            property: "og:title",
            content: title || "ADS Staking Platform",
          },
          {
            property: "og:description",
            content: description,
          },
          {
            name: "twitter:card",
            content: "summary",
          },
          {
            name: "twitter:title",
            content: title || "ADS Staking Platform",
          },
          {
            name: "twitter:description",
            content: description,
          },
        ]
          .concat([
            {
              property: "og:image",
              content: getMetaImageUrl(metaImages.og),
            },
            {
              name: "twitter:image",
              content: getMetaImageUrl(metaImages.twitter),
            },
          ])}
      />
    </>
  );
}
