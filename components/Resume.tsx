import * as React from 'react'
import { Provider } from 'mobx-react'
import './Resume.scss';

// import { initStore } from '../store/store'
// import Page from '../components/Page'
// import  Head from '../components/Head';
// import  Nav from '../components/Nav';

export default class Resume extends React.Component<any, any> {
  // private jj:string='ll';
  private store: any;

  constructor(props: any) {
    super(props)
    // this.store = initStore(props.isServer, props.lastUpdate)
  }

  render() {
    return (
      <Provider store={this.store}>
        <div className="resume">
          <section className="header">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2 className="d-inline-block page-title">關於我</h2>
                </div>
                <div className="col-12 d-flex">
                  <div className="image-box">
                    <img src="static/image/me.jpg" className="img-fluid img-me img-thumbnail rounded-circle" />
                  </div>
                  <div className="d-flex flex-column justify-content-center pl-4 detail-list">
                    <h4 className="mb-3 detail-list-title">基本資料</h4>
                    <h5 className="font-weight-normal title"><div className="small">Name:</div><div> 林庭瑋 / Ting Wei Lin</div></h5>
                    <h5 className="font-weight-normal title"><div className="small">Birthday:</div> <small>1985. </small>  03.04</h5>
                    <h5 className="font-weight-normal title"><div className="small">Job Title:</div> 網頁前端工程師 / Web frontend Developer</h5>
                  </div>
                </div>
                <div className="col-12">
                <hr className="my-4 mx-2" />
                </div>

                <div className="d-flex flex-column justify-content-center pl-4 detail-list">
                    <h4 className="mb-3 detail-list-title">前端相關技能 / skill</h4>
                    <h5 className="font-weight-normal title"><div className="small">Basic:</div><div> HTML、CSS、Javascript</div></h5>
                    <h5 className="font-weight-normal title"><div className="small">Style:</div>
                    Bootstrap(3、4)、Scss
                    </h5>
                    <h5 className="font-weight-normal title"><div className="small">Frontend web framework:</div>
                    React、ReactNative、Angular7、Vue(Cli 3)、AngularJs</h5>
                    <h5 className="font-weight-normal title"><div className="small">App framework:</div>
                    ReactNative</h5>
                    <h5 className="font-weight-normal title"><div className="small">Other:</div>
                    Webpack、Jquery、NodeJs+Express</h5>
                </div>

              </div>
            </div>
          </section>
        </div>

      </Provider>
    )
  }
}
