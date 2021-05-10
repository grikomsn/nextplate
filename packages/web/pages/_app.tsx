// https://nextjs.org/docs/advanced-features/custom-app

import * as React from "react";

import siteConfig from "~config/site";
import useNProgress from "~lib/use-nprogress";
import { GlobalProvider } from "~store/global";
import theme from "~theme";

import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo, SocialProfileJsonLd } from "next-seo";

interface CustomAppProps extends AppProps {
  noop?: unknown;
}

const Providers: React.FC<Pick<CustomAppProps, "noop">> = (props) => {
  const { children } = props;

  return (
    <ChakraProvider resetCSS theme={theme}>
      <GlobalProvider>
        {/*  */}
        {children}
      </GlobalProvider>
    </ChakraProvider>
  );
};

const Effects: React.FC<Pick<CustomAppProps, "router">> = (props) => {
  const { router } = props;

  useNProgress(router);

  return null;
};

export default function App(props: CustomAppProps) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { Component, pageProps, router } = props;

  return (
    <Providers>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>

      <DefaultSeo
        canonical={siteConfig.siteUrl + (router.asPath || "")}
        defaultTitle={siteConfig.defaultTitle}
        description={siteConfig.description}
        openGraph={{
          title: siteConfig.title,
          type: "website",
          site_name: siteConfig.siteName,
          images: [
            {
              url: `${siteConfig.siteUrl}/social.png`,
              alt: siteConfig.siteName,
            },
          ],
        }}
        titleTemplate={`%s · ${siteConfig.siteName}`}
        twitter={{
          cardType: "summary_large_image",
          handle: siteConfig.twitterUsername,
          site: siteConfig.twitterUsername,
        }}
      />

      <SocialProfileJsonLd
        name={siteConfig.siteName}
        sameAs={Object.values(siteConfig.socials)}
        type="person"
        url={siteConfig.siteUrl}
      />

      <Component {...pageProps} />

      <Effects router={router} />
    </Providers>
  );
}

// import NextApp, { AppContext } from "next/app";
//
// App.getInitialProps = async (ctx: AppContext) => {
//   const props = NextApp.getInitialProps(ctx);
//   const noop = undefined;
//   return { ...props, noop };
// };
