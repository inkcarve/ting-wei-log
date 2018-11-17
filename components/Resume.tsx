import * as React from "react";
import { Provider } from "mobx-react";
import "./Resume.scss";
import {
  ListGroup,
  ListGroupItem
  // ListGroupItemHeading,
  // ListGroupItemText
} from "reactstrap";
import { initStore } from "../store/store";
import { dangeriousHtmlMarkup } from "../common/html-service";
// import { html2pdf } from "../common/html2pdf";
// import Page from '../components/Page'
// import  Head from '../components/Head';
// import  Nav from '../components/Nav';

export default class Resume extends React.Component<any, any> {
  // private jj:string='ll';
  private store: any;
  private authorData: any;
  static getInitialProps({ req }: { req: any }) {
    const isServer = !!req;
    const store = initStore(isServer);
    return { lastUpdate: store.lastUpdate, isServer };
  }

  constructor(props: any) {
    super(props);
    this.store = initStore(props.isServer, props.lastUpdate);
    this.authorData = this.store.authorData;
  }

  private mapListGroupItem(lists) {
    return lists.map((obj, i) => {
      return (
        <ListGroupItem>
          <h5 className="font-weight-normal title">
            <h5>
              {obj.title}
              <small className="pl-1">{obj.titleEn} :</small>
            </h5>
            <div className="small">
              <div
                dangerouslySetInnerHTML={dangeriousHtmlMarkup(obj.content)}
              />
            </div>
          </h5>
        </ListGroupItem>
      );
    });
  }

  private mapDetailListItems(lists) {
    return lists.map((obj, i) => {
      return (
        <div>
          <h5 className="font-weight-normal title">
            {obj.title ||
              (obj.titleEn && (
                <h5>
                  {obj.title}
                  <small className="pl-1">{obj.titleEn} :</small>
                </h5>
              ))}
            <div className="small detail">
              <div dangerouslySetInnerHTML={dangeriousHtmlMarkup(obj.detail)} />
            </div>
          </h5>
          <div className="detail-list">
            <h5>{obj.listGroupTitle}</h5>
            {obj.listGroup ? (
              <ListGroup className="mb-4">
                {this.mapListGroupItem(obj.listGroup)}
              </ListGroup>
            ) : (
              ""
            )}
          </div>
        </div>
      );
    });
  }

  // public html2pdf(id:string) {
  //   html2pdf({
  //     id:id,
  //     quality:1,
  //     filename:'Tingwei-Log.pdf'
  //   });
  // }

  render() {
    return (
      <Provider store={this.store}>
        <div className="resume">
          <section className="header">
            <div className="container-fluid">
              <div className="row" id="resume1">
                <div className="col-12 mb-4 text-right">
                  <h2 className="d-inline-block">關於我</h2>
                  <h6 className="text-muted font-weight-light">
                    一個想跨足React-Native的網頁前端工程師
                  </h6>
                  {/* <button className="btn btn-primary" onClick={()=>this.html2pdf('resume1')}></button> */}
                </div>
                <div className="col-12">
                  <div className="row align-items-md-center">
                    <div className="col-12 col-md-4 col-lg-3 col-xl-2 image-box mb-5">
                      <img
                        src="static/image/me.jpg"
                        className="img-fluid img-me img-thumbnail rounded-circle"
                      />
                    </div>
                    <div className="pl-md-4 col-12 col-md-8 col-lg-9 col-xl-10 detail-list">
                      <h4 className="mb-3 detail-list-title section-title">
                        基本資料 / PERSONAL DATA
                      </h4>
                      <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                          {this.mapDetailListItems(this.authorData.basic)}
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                          {this.mapDetailListItems(this.authorData.contact)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4 mx-0" />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-6">
                <div className="col-12 d-flex flex-column justify-content-center detail-list">
                    <h4 className="mb-3 detail-list-title section-title">
                      自述 / ABOUT ME
                    </h4>
                    {this.mapDetailListItems(this.authorData.info)}
                    <hr className="my-4 mx-0" />
                  </div>
                  <div className="col-12 d-flex flex-column justify-content-center detail-list">
                    <h4 className="mb-3 detail-list-title section-title">
                      學歷 / EDUCATION
                    </h4>
                    {this.mapDetailListItems(this.authorData.education)}
                    <hr className="my-4 mx-0" />
                  </div>
                  <div className="col-12 d-flex flex-column justify-content-center detail-list">
                    <h4 className="mb-3 detail-list-title section-title">
                      公開作品或專案 / ＷORKS OR PROJECTS
                    </h4>
                    {this.mapDetailListItems(this.authorData.projects)}

                    <hr className="my-4 mx-0" />
                  </div>

                  <div className="col-12 d-flex flex-column justify-content-center detail-list">
                    <h4 className="mb-3 detail-list-title section-title">
                      工作經驗 / WORK EXPERIENCE
                    </h4>
                    {this.mapDetailListItems(this.authorData.jobs)}
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="col-12 d-flex flex-column justify-content-center detail-list">
                    <h4 className="mb-3 detail-list-title section-title">
                      前端相關技能 / FRONTEND SKILL
                    </h4>
                    {this.mapDetailListItems(this.authorData.skill)}
                    <hr className="my-4 mx-0" />
                  </div>

                  <div className="col-12 d-flex flex-column justify-content-center detail-list">
                    <h4 className="mb-3 detail-list-title section-title">
                      非前端相關技能 / OTHER SKILL
                    </h4>
                    {this.mapDetailListItems(this.authorData.otherSkill)}
                    <hr className="my-4 mx-0" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Provider>
    );
  }
}
