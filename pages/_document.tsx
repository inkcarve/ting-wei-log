//** ../d.ts/_style_d.ts

import * as React from 'react';
import Document, { Main, NextScript} from 'next/document'
import  Head from '../components/Head';

// @inject('store') @observer
class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  // componentDidMount () {
  //   this.props.store.start()
  // }

  // componentWillUnmount () {
  //   this.props.store.stop()
  // }

  render () {
    return (
     <html>
      <Head />
      <body>
      <Main />
      <NextScript />
       </body>
     
     </html>
      
    )
  }
}

export default MyDocument;
