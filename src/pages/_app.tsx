import React from "react";
import { AppProps, Container } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  const description =
    "Creating a non-SSR map component inside a Next.js project.";
  const title = `Next.js + Mapbox Demo - ${description}`;
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Container>
        <Head>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta content={description} name="description" />
          <meta content={description} property="og:description" />
          <meta charSet="utf-8" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link href="/static/favicon.ico" rel="shortcut icon" />
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
            rel="stylesheet"
          />
          <meta content="en_US" property="og:locale" />
          {/* <meta property="og:image" content="/static/banner.jpg" /> */}
          {/* <meta content="https://next-mapbox-demo.now.sh" property="og:url" /> */}
        </Head>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
