import * as React from 'react';
import { Provider, connect } from 'react-redux';
import { initStore } from '../redux/redux-store';
// import withRedux from 'next-redux-wrapper';
import CatchCat from '../components/catch-cat';


class ReduxTask extends React.Component<any, any> {
  private store:any;
  static getInitialProps ({ req }) {
    const isServer = !!req
    // const store = initStore()
    return {isServer};
  }
  // static async getInitialProps ({Component, ctx}) {
  //   return {
  //     pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
  //   }
  // }

  constructor (props:any) {
    super(props)
    this.store = initStore()
    // this.store = this.props.store;
    console.log(initStore())
  }

  render () {
    console.log('render')
    console.log(this)
    return (
      <div>
      <Provider store={this.store}>
      
      <div className="container-fluid pt-4">
        {/*<Page title='' linkTo='/other' />*/}
        <CatchCat/>
      </div>
      
      </Provider>
      </div>
    )
  }

}

export default ReduxTask;
// export default withRedux(initStore)(ReduxTask)


