import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#fecd2f" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="theme-color" content="#121212" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </Head>
        <script
          async
          id="chiffre:analytics"
          src="https://chiffre.io/analytics.js"
          data-chiffre-project-id={`${process.env.data_chiffre_project_id}`}
          data-chiffre-public-key={`${process.env.data_chiffre_public_key}`}
          referrerpolicy="origin"
          crossOrigin="anonymous"
        />

        <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
