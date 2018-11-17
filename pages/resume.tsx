  import * as React from 'react';
import { Provider } from 'mobx-react';
import { initStore } from '../store/store';
import Resume from '../components/Resume';

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
      <div className="pt-4">
{/*      <Head></Head>
      <Nav></Nav>*/}
      <Resume/>
      </div>
      {/*</Page>*/}
      </Provider>
    )
  }
}
