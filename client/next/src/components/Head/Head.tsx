import React from "react";
import NextHead from "next/head";

import { appName } from "lib/config";

interface Props {
  title: string;
}

/**
 * Custom HTML head for meta information/SEO.
 */
const Head: React.FC<Props> = ({ title }: Props) => {
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />

      <title>{title ? `${title} | ${appName}` : appName}</title>
    </NextHead>
  );
};

export default Head;
