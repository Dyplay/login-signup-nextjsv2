import Head from 'next/head';

export const siteTitle = "Login Signup Nextjs";

export default function Layout({ pageTitle, children }) {
  const title = "Login Signup Nextjs";
  return (
    <div >
      <Head>
        <link rel="icon" href='/favicon.ico' />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>shipFlix</title>
        <meta name="title" content="shipFlix" />
        <meta name="description" content="See movies and series for free!" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="shipFlix" />
        <meta property="og:description" content="See movies and series for free!" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="shipFlix" />
        <meta property="twitter:description" content="See movies and series for free!" />
      </Head>
      <main>{children}</main>
    </div>
  );
}