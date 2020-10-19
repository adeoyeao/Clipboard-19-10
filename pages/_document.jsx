import Document, {Html, Head, Main, NextScript} from "next/document"

export default class MyDocument extends Document {
      render() {
            return (
                  <Html lang="en">
                        <Head>
                              <meta charSet="UTF-8" />
                              <meta name="description" content="Clipboard landing page built in React and Next.js" />
                              <meta name="keywords" content="React, Next.js, JavaScript, Express" />
                              <meta name="author" content="Alfred Adeoye" />
                              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        </Head>
                        <body>
                              <Main />
                              <NextScript />
                        </body>
                  </Html>
            )
      }
}