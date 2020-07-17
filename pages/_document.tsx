import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

class Mittens extends Document {
  render(): JSX.Element {
    return (
      <html>
        <Head />

        <body className="cursor-default flex min-h-screen flex-col justify-center items-center p-8">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default Mittens
