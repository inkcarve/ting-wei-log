import * as React from "react";
import { Provider, observer } from "mobx-react";
import { initStore } from "../store/store";

import VrDemo from "../components/VrDemo";

@observer
export default class PageVr extends React.Component<any, any> {
  private store: any;
  static getInitialProps() {
    const isServer = typeof window=== 'undefined';

    console.log('isServer '+isServer)
    console.log(typeof window)
    const store = initStore(isServer);
    return { lastUpdate: store.lastUpdate, isServer };
  }

  constructor(props:any) {
    super(props);
    this.store = initStore(typeof window=== 'undefined', props.lastUpdate);
  }

  // componentDidMount(){
  // }

  render() {

    if(typeof window=== 'undefined'){
      return (
        <div>
          <h2 className="d-none">VR Demo</h2>
        </div>
      )
    }
      
    return (
      <Provider store={this.store}>
        <VrDemo/>
      </Provider>
    );
  }
}
