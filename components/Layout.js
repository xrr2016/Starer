import Head from 'next/head'

export default ({ children, title }) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link href="/static/style.css" rel="stylesheet" />
    <link href="/static/logo.png" rel="icon" type="image/x-icon" />
  </Head>
  <main>
    {children}
  </main>
)