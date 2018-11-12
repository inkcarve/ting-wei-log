  import * as React from 'react';
import { Provider } from 'mobx-react';
import { initStore } from '../store/store';
import Head from '../components/Head';
import Nav from '../components/Nav';
import Page from '../components/Page'
export default class Counter extends React.Component<any, any> {
  private store:any;
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(isServer)
    return { lastUpdate: store.lastUpdate, isServer }
  }

  constructor (props) {
    super(props)
    this.store = initStore(props.isServer, props.lastUpdate)
  }

  render () {
    return (
      <Provider store={this.store}>
      {/*<Page title='about' linkTo='/about' >*/}
      <div>
{/*      <Head></Head>
      <Nav></Nav>*/}
      <div className="main">
      <div className="container mt-3">
        {/*<Page title='' linkTo='/other' />*/}
        <h1>React + NextJs + reactstrap + typescript + bootstrap4</h1>
      </div>
      </div>
      </div>
      {/*</Page>*/}
      </Provider>
    )
  }
}
