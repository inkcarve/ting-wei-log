import * as React from "react";
import { Provider } from "mobx-react";
import { initStore } from "../store/store";
// import Head from '../components/Head';
// import Nav from '../components/Nav';
// import Page from '../components/Page'
export default class PageAbout extends React.Component<any, any> {
  private store: any;
  static getInitialProps({ req }) {
    const isServer = !!req;
    const store = initStore(isServer);
    return { lastUpdate: store.lastUpdate, isServer };
  }

  constructor(props) {
    super(props);
    this.store = initStore(props.isServer, props.lastUpdate);
  }

  render() {
    return (
      <Provider store={this.store}>
        <div>
          <div className="container-fluid pt-4">
            <h3>
              Website : 
            </h3>
            <h5 className="text-primary font-weight-normal mb-4">
              ReactJs + NextJs + reactstrap + typescript + bootstrap4
              + mobx + mobx-react
            </h5>
            <h3>The Shining Cat : </h3>
            <h5 className="text-primary font-weight-normal">
            ReactJs + NextJs + reactstrap + typescript + bootstrap4 + redux + react-redux
            </h5>
          </div>
        </div>
      </Provider>
    );
  }
}
