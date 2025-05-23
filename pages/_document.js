import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/favicon.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.png" />
        <link rel="apple-touch-icon" href="/img/favicon.png" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
