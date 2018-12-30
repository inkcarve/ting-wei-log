import * as React from "react";
import { observer, inject } from "mobx-react";
import "./Resume.scss";
import {
  ListGroup,
  ListGroupItem
  // ListGroupItemHeading,
  // ListGroupItemText
} from "reactstrap";
// import { initStore } from "../store/store";
import { dangeriousHtmlMarkup } from "../common/html-service";
import PrintTopNav from "../components/PrintTopNav";
import { i18n, withNamespaces } from "../i18n/i18n";
import MapDetailListItems from "./MapDetailListItems";
import { observable, computed } from "mobx";
// import { observable, action } from "mobx";
// import authorData from "data/author-data";

const printSvg = require("../static/image/_ionicons_svg_md-print.svg");
const downloadSvg = require("../static/image/_ionicons_svg_md-download.svg");
// import { html2pdf } from '../common/html2pdf';

function Summary(props: any): any {
  if (!props.data) {
    return;
  }
  return props.data.map((obj: any, i: number) => (
    <h5 className="title small font-weight-normal mb-2" key={i}>
      {obj.detail}
    </h5>
  ));
}

@inject("store")
@observer
class Resume extends React.Component<any, any> {
  // public authorData: any;

  // componentDidMount() {
  //   this.props.store.applyLanguage();
  // }

  constructor(props: any) {
    super(props);
    this.props.store.applyLanguage();
  }

  @computed get authorData() {
    return this.props.store.authorData
  }

  print() {
    if (document.execCommand("print")) {
      return;
    }
    window.print();
  }

  render() {
    // this.authorData = this.props.store.authorData;
    // console.log(i18n.language)
    // if (i18n.language === "en") {
    //   this.authorData = this.props.store.authorData_en;
    // } else {
    //   this.authorData = this.props.store.authorData;
    // }
    return (
      <div className="resume pt-4 print-pt-0">
        <a
          className="btn btn-outline-primary btn-tools btn-download print-d-none"
          href={`${this.authorData.pdfSrc}?${Date.now()}`}
          target="_blank"
        >
          <div dangerouslySetInnerHTML={dangeriousHtmlMarkup(downloadSvg)} />
        </a>
        <button
          className="btn btn-outline-primary btn-tools btn-print print-d-none"
          onClick={() => this.print()}
        >
          <div dangerouslySetInnerHTML={dangeriousHtmlMarkup(printSvg)} />
        </button>
        <section className="header">
          <PrintTopNav />
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 mb-3 text-right">
                <h2 className="d-inline-block print-d-none">
                  {this.authorData.bigTitle.about}
                </h2>
                <h6 className="text-muted font-weight-light print-d-none">
                  <MapDetailListItems lists={this.authorData.info} />
                </h6>
                {/* <button className="btn btn-primary" onClick={()=>this.html2pdf('resume1')}></button> */}
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-12 col-md-4 col-lg-3 col-xl-2 image-box mb-5">
                <div className="col-12">
                  <img
                    src="static/image/me.jpg"
                    className="img-fluid img-me img-thumbnail rounded-circle"
                  />
                </div>
              </div>
              <div className="pl-md-4 col-12 col-md-8 col-lg-9 col-xl-10 detail-list">
                <div className="col-12">
                  <h4 className="mb-3 detail-list-title section-title">
                    {this.authorData && this.authorData.bigTitle.personalData}
                  </h4>
                  <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                      <MapDetailListItems lists={this.authorData.basic} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                      <MapDetailListItems lists={this.authorData.contact} />
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-4 mx-0" />
            </div>
            <div className="row page-break-box">
              <div className="col-12 col-lg-6">
                <div className="col-12 d-flex flex-column justify-content-center detail-list">
                  <h4 className="mb-3 detail-list-title section-title">
                    {this.authorData.bigTitle.summary}
                  </h4>
                  <Summary data={this.authorData.summary} />
                  {/* {this.authorData &&
                    this.authorData.summary.map((obj:any, i:number) => (
                      <h5
                        className="title small font-weight-normal mb-2"
                        key={i}
                      >
                        {obj.detail}
                      </h5>
                    ))} */}
                  <hr className="my-4 mx-0" />
                </div>
                <div className="col-12 d-flex flex-column justify-content-center detail-list">
                  <h4 className="mb-3 detail-list-title section-title">
                    {this.authorData.bigTitle.education}
                  </h4>
                  <MapDetailListItems lists={this.authorData.education} />
                  <hr className="my-4 mx-0" />
                </div>

                <div className="col-12 d-flex flex-column justify-content-center detail-list">
                  <h4 className="mb-3 detail-list-title section-title">
                    {this.authorData.bigTitle.jobs}
                  </h4>
                  <MapDetailListItems lists={this.authorData.jobs} />
                  <hr className="my-4 mx-0" />
                </div>
              </div>
              <PrintTopNav />
              <div className="col-12 col-lg-6">
                <div className="col-12 d-flex flex-column justify-content-center detail-list">
                  <h4 className="mb-3 detail-list-title section-title">
                    {this.authorData.bigTitle.skill}
                  </h4>
                  <MapDetailListItems lists={this.authorData.skill} />
                  <hr className="my-4 mx-0" />
                </div>
                <div className="col-12 d-flex flex-column justify-content-center detail-list">
                  <h4 className="mb-3 detail-list-title section-title">
                    {this.authorData.bigTitle.otherSkill}
                  </h4>
                  <MapDetailListItems lists={this.authorData.otherSkill} />
                  <hr className="my-4 mx-0" />
                </div>
              </div>
              <PrintTopNav />
              <div className="col-12 col-lg-6">
                <div className="col-12 d-flex flex-column justify-content-center detail-list">
                  <h4 className="mb-3 detail-list-title section-title">
                    {this.authorData.bigTitle.projects}
                  </h4>
                  <MapDetailListItems lists={this.authorData.projects} />
                  <hr className="my-4 mx-0" />
                </div>
                <div className="col-12 d-flex flex-column justify-content-center detail-list">
                  <h4 className="mb-3 detail-list-title section-title">
                    {this.authorData.bigTitle.pay}
                  </h4>
                  <MapDetailListItems lists={this.authorData.pay} />
                  <hr className="my-4 mx-0" />
                </div>
                <div className="col-12 d-flex flex-column justify-content-center detail-list">
                  <h4 className="mb-3 detail-list-title section-title">
                    {this.authorData.bigTitle.autobiography}
                  </h4>
                  <MapDetailListItems lists={this.authorData.autobiography} />
                  <hr className="my-4 mx-0" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withNamespaces("common")(Resume);
