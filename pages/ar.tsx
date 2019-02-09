import * as React from "react";
import { Provider, observer } from "mobx-react";
import { initStore } from "../store/store";
import ArDemo from "../components/ArDemo";

@observer
export default class PageAr extends React.Component<any, any> {
  private store: any;
  static getInitialProps() {
    const isServer = typeof window==='undefined';
    const store = initStore(isServer);
    return { lastUpdate: store.lastUpdate, isServer };
  }

  constructor(props:any) {
    super(props);
    this.store = initStore(typeof window==='undefined', props.lastUpdate);
  }

  render() {
    return (
      <Provider store={this.store}>
        <ArDemo store={this.store}/>
      </Provider>
    );
  }
}
