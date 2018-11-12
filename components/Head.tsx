import * as React from 'react';
import { Head } from 'next/document';
// const core_scss = require( '../scss/core.scss');

// const core_scss = require( '../scss/core.scss');
export default class HeadCustom extends React.Component<any, any>{
    constructor (props:any) {
    super(props)
  }
render () {
  console.log("headcustom")
  return (
    <Head>
      <title>Next - {this.props.title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      {/*<meta name="description" content={description} />*/}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="static/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="/_next/static/style.css" />
      {/*<link href={core_scss} rel="stylesheet" />*/}
      {/*<style link={core_scss}></style>*/}
    </Head>
  
)
}
}