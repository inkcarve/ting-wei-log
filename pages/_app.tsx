import * as  React from 'react'
import App, { Container } from 'next/app'
import Nav from '../components/Nav';
import { appWithTranslation } from '../i18n/i18n';
import '../scss/core.scss';

class MyApp extends App {
  // static async getInitialProps({ Component, router, ctx }) {
  //   let pageProps = {}

  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }

  //   return { ...pageProps}
  // }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Nav/>
        <div className="main print-pt-0 print-mt-5">
        <Component {...pageProps} />
        </div>
      </Container>
    )
  }
}

export default appWithTranslation(MyApp)