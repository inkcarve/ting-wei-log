import * as React from 'react';
import { Provider } from 'mobx-react';
import { initStore } from '../store/store';
import Head from '../components/Head';
import Nav from '../components/Nav';
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
      <div>
      <Head></Head>
      <Nav></Nav>
      <div className="container">
        {/*<Page title='' linkTo='/other' />*/}
        <h1>React + NextJs + reactstrap</h1>
      </div>
      </div>
      </Provider>
    )
  }
}
