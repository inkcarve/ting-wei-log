import * as React from 'react';
import { Provider, connect } from 'react-redux';
import { initStore } from '../redux/redux-store';
// import withRedux from 'next-redux-wrapper';
import CatchCat from '../components/catch-cat';

class ReduxTask extends React.Component<any, any> {
  private store: any;
  static getInitialProps({ req }) {
    const isServer = !!req;
    // const store = initStore()
    return { isServer };
  }

  constructor(props: any) {
    super(props);
    this.store = initStore();
    // this.store = this.props.store;
    // console.log(initStore());
  }

  render() {
    // console.log('render');
    // console.log(this);
    return (
      <div>
        <Provider store={this.store}>
          <div className="container-fluid pt-4">
          <div className="row">
                <div className="col-12 mb-md-4 text-right">
                  <h2 className="d-inline-block print-d-none text-primary">亮晶晶的小貓</h2><br/>
                  <h6 className="text-muted font-weight-light d-inline-block border-bottom pl-4 pb-2">
                  <span className="text-warning">The Shining Cat (Not support english content now)</span><br/>
                    <small>一個建立在 Redux 與 React-Redux 的遊戲</small>
                    <div className=""/>
                  </h6>                  
                </div>
              </div>
            <CatchCat />
          </div>
        </Provider>
      </div>
    );
  }
}

export default ReduxTask;
// export default withRedux(initStore)(ReduxTask)
