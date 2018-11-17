import * as React from "react";
import { Provider } from "mobx-react";
import { initStore } from "../store/store";
// import Page from '../components/Page'
// import  Head from '../components/Head';
// import  Nav from '../components/Nav';
import './index.scss';

export default class Index extends React.Component<any, any> {
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
        {/*<Page title='index' linkTo='/other' >*/}
        <div>
          <div className="container-fluid">
            {/*<Page title='' linkTo='/other' />*/}

            <div className="row justify-content-center">
              <div className="col-12 position-relative">
                {/* <div className="embed-responsive embed-responsive-16by9 position-relative">
                  <video
                    autoPlay={true}
                    loop
                    className="embed-responsive-item"
                    controls={false}
                  >
                    <source
                      src="static/video/Lamp-small.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                 */}
                <div className="embed-responsive embed-responsive-16by9 position-relative index-bg-box d-flex align-items-center">
                  {/* <img
                    className="image-fluid col-12 p-0"
                    src="static/image/index-door-open.jpg"
                    alt=""
                  /> */}
                  <div className="d-none d-md-block col-md-4 text-right">
                  <a className="btn btn-outline-light mr-4 px-md-5 py-md-4" href="/resume"><h2>More</h2></button>
                  </div>
                </div>

                <div className="d-md-none text-center my-5">
                  <a className="btn btn-outline-primary px-5 py-2" href="/resume"><h2>More</h2></button>
                  </div>
                {/* <div className="abs-full">
                  <div className="col-12 d-flex justify-content-center">
                    button.btn.btn-outline
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
