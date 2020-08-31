import Head from 'next/head';

export default function SiteHead({ data }) {
  return (
    <Head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ru_RU" />
      {
        data.mainInfo
          && data.mainInfo[0]
          && data.mainInfo[0].fields ? <>
            <title>{data.mainInfo[0].fields.siteTitle}</title>
            <meta name="description" content={data.mainInfo[0].fields.siteDescription} />
            <meta property="og:title" content={data.mainInfo[0].fields.siteTitle} />
            <meta property="og:description" content={data.mainInfo[0].fields.siteDescription} />
            <meta name="twitter:title" content={data.mainInfo[0].fields.siteTitle} />
            <meta name="twitter:description" content={data.mainInfo[0].fields.siteDescription} />
            <meta property="og:image" content={data.mainInfo[0].fields.shareImage.fields.file.url} />
            <meta name="twitter:card" content={data.mainInfo[0].fields.shareImage.fields.file.url} />
            <meta name="twitter:image" content={data.mainInfo[0].fields.shareImage.fields.file.url} />
          </> : null
      }
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet" />
    </Head>
  )
}