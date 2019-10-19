import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import "../public/css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props
    return <>
      <Head>
        <script
          async
          key="worldwind"
          custom-element="worldwind"
          src="https://files.worldwind.arc.nasa.gov/artifactory/web/0.9.0/worldwind.min.js"
        />
      </Head>
      <Component {...pageProps} />
    </>
  }
}

export default MyApp