import * as React from "react";
import { Provider, observer } from "mobx-react";
import { initStore } from "../store/store";
import Resume from "../components/Resume";

@observer
export default class PageResume extends React.Component<any, any> {
  private store: any;
  static getInitialProps() {
    const isServer = typeof window===undefined;
    const store = initStore(isServer);
    return { lastUpdate: store.lastUpdate, isServer };
  }

  constructor(props) {
    super(props);
    this.store = initStore(typeof window===undefined, props.lastUpdate);
  }


  render() {
    return (
      <Provider store={this.store}>
        <Resume store={this.store}/>
      </Provider>
    );
  }
}
