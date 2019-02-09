import * as React from "react";
import { Provider } from "mobx-react";
import { initStore } from "../store/store";
import { withNamespaces } from '../i18n/i18n';
// import { i18n } from '../i18n/i18n';

// import Head from '../components/Head';
// import Nav from '../components/Nav';
// import Page from '../components/Page'
class PageAbout extends React.Component<any, any> {
  private store: any;
  static getInitialProps() {
    const isServer = !typeof window==='undefined';
    const store = initStore(isServer);
    return { lastUpdate: store.lastUpdate, isServer, namespacesRequired:['About'] };
  }

  constructor(props:any) {
    super(props);
    this.store = initStore(typeof window==='undefined', props.lastUpdate);
  }

  render() {
    return (
      <Provider store={this.store}>
        <div>
          <div className="container-fluid pt-4">
            <h3>
            {this.props.t('website')} : 
            </h3>
            <h5 className="text-primary font-weight-normal mb-4">
              ReactJs + NextJs + reactstrap + typescript + bootstrap4
              + mobx + mobx-react
            </h5>
            <h3>{this.props.t('reduxGame')} : </h3>
            <h5 className="text-primary font-weight-normal">
            ReactJs + NextJs + reactstrap + typescript + bootstrap4 + redux + react-redux
            </h5>
          </div>
        </div>
      </Provider>
    );
  }
}

export default withNamespaces('About')(PageAbout)
