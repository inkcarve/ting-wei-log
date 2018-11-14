import * as React from 'react'
import { Provider } from 'mobx-react'
import './Resume.scss';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { initStore } from '../store/store'
import { dangeriousHtmlMarkup } from '../common/html-service'
// import Page from '../components/Page'
// import  Head from '../components/Head';
// import  Nav from '../components/Nav';

export default class Resume extends React.Component<any, any> {
  // private jj:string='ll';
  private store: any;
  private authorData: any;
  static getInitialProps({ req }: { req: any }) {
    const isServer = !!req
    const store = initStore(isServer)
    return { lastUpdate: store.lastUpdate, isServer }
  }

  constructor(props: any) {
    super(props)
    this.store = initStore(props.isServer, props.lastUpdate)
    this.authorData = this.store.authorData;
  }

  private mapListGroupItem(lists) {
    return lists.map((obj, i) => {
      return (<ListGroupItem>
        <h5 className="font-weight-normal title">
          <h5>{obj.title}<small className="pl-1">{obj.titleEn} :</small></h5>
          <div className="small"><div dangerouslySetInnerHTML={dangeriousHtmlMarkup(obj.content)}></div></div>
        </h5>
      </ListGroupItem>)
    })
  }

  private mapDetailListItems(lists) {
    return lists.map((obj, i) => {
      return (
        <div>
          <h5 className="font-weight-normal title">
            <h5>{obj.title}<small className="pl-1">{obj.titleEn} :</small></h5>
            <div className="small detail"><div dangerouslySetInnerHTML={dangeriousHtmlMarkup(obj.detail)}></div></div>
          </h5 >
          <div className="detail-list">
            <h5>{obj.listGroupTitle}</h5>
            {obj.listGroup ? (
              <ListGroup className="mb-4">
                {this.mapListGroupItem(obj.listGroup)}
              </ListGroup>) : ''}
          </div>
        </div>)
    }
    )
  }

  render() {
    return (
      <Provider store={this.store}>
        <div className="resume">
          <section className="header">
            <div className="container">
              <div className="row">
                <div className="col-12 mb-4 text-right">
                  <h2 className="d-inline-block">關於我</h2>
                </div>
                <div className="col-12 d-flex align-items-center flex-column flex-md-row">
                  <div className="image-box mb-5">
                    <img src="static/image/me.jpg" className="img-fluid img-me img-thumbnail rounded-circle" />
                  </div>
                  <div className="pl-md-4 detail-list flex-grow-1">
                    <h4 className="mb-3 detail-list-title section-title">基本資料</h4>
                    <div className="row">
                      <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        {this.mapDetailListItems(this.authorData.basic)}
                      </div>
                      <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        {this.mapDetailListItems(this.authorData.contact)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <hr className="my-4 mx-2" />
                </div>

                <div className="col-12 d-flex flex-column justify-content-center detail-list">
                  <h4 className="mb-3 detail-list-title section-title">前端相關技能 / Frontend skill</h4>
                  {this.mapDetailListItems(this.authorData.skill)}
                </div>

                <div className="col-12">
                  <hr className="my-4 mx-2" />
                </div>

                <div className="col-12 d-flex flex-column justify-content-center detail-list">
                  <h4 className="mb-3 detail-list-title section-title">非前端相關技能 / Other skill</h4>
                  {this.mapDetailListItems(this.authorData.otherSkill)}
                </div>

              </div>
            </div>
          </section>
        </div>

      </Provider>
    )
  }
}
