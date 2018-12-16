import * as React from "react";
import { Provider } from "mobx-react";
import { initStore } from "../store/store";
// import Page from '../components/Page'
// import  Head from '../components/Head';
// import  Nav from '../components/Nav';
import './index.scss';

export default class PageIndex extends React.Component<any, any> {
  // private jj:string='ll';
  private store: any;
  static getInitialProps({ req }: { req: any }) {
    const isServer = !!req;
    const store = initStore(isServer);
    return { lastUpdate: store.lastUpdate, isServer };
  }

  constructor(props: any) {
    super(props);
    this.store = initStore(props.isServer, props.lastUpdate);
  }

  render() {
    return (
      <Provider store={this.store}>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12 p-0 position-relative">
                <div className="embed-responsive embed-responsive-16by9 position-relative index-bg-box d-flex align-items-center">
                  <div className="d-none d-md-block col-md-5 text-right">
                  <a className="btn btn-outline-light mr-4 px-md-5 py-md-4 mb-3 col-md-12 col-lg-10 col-xl-8" href="/redux-game"><h3>The Shining Cat</h3></a>
                  <a className="btn btn-outline-light mr-4 px-md-5 py-md-4 col-md-12 col-lg-10 col-xl-8" href="/resume"><h3>More about Me</h3></a>
                  </div>
                </div>
                <div className="d-md-none text-center my-5">
                  <a className="btn btn-outline-primary px-2 py-2 mb-3 col-8" href="/redux-game"><h4>The Shining Cat</h4></a>
                  <a className="btn btn-outline-primary px-2 py-2 col-8" href="/resume"><h4>More about Me</h4></a>
                  </div>
              </div>
            </div>
          </div>
      </Provider>
    );
  }
}
