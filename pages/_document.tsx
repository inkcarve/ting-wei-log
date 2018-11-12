//** ../d.ts/_style_d.ts

import * as React from 'react';
import Link from 'next/link';
import Document, { Main, NextScript} from 'next/document'
import { inject, observer } from 'mobx-react';
// import  Clock  from './Clock';
import  Head from '../components/Head';
import  Nav from '../components/Nav';

import '../scss/core.scss';

// @inject('store') @observer
class MyDocument extends Document<any, any> {

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
    // console.log(this)
    return (
     <html>
      <Head />
      <body>
      <Nav />
      <Main />
      <NextScript />
      {/*{this.props.children}*/}
        {/*<h1>{this.props.title}</h1>*/}
        {/*<Clock lastUpdate={this.props.store.lastUpdate} light={this.props.store.light} />*/}
        {/*<nav>
          <Link href={this.props.linkTo}><a>Navigate</a></Link>
        </nav>*/}
       </body>
     
     </html>
      
    )
  }
}

export default MyDocument;
