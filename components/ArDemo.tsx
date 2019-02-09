import * as React from "react";
import { observer, inject } from "mobx-react";
import "./ArDemo.scss";
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
// import {
//   ListGroup,
//   ListGroupItem
//   // ListGroupItemHeading,
//   // ListGroupItemText
// } from "reactstrap";
// import { initStore } from "../store/store";
import { dangeriousHtmlMarkup } from "../common/html-service";
import PrintTopNav from "../components/PrintTopNav";
import { i18n, withNamespaces } from "../i18n/i18n";
import MapDetailListItems from "./MapDetailListItems";
// import { observable, computed } from "mobx";
// import { observable, action } from "mobx";
// import authorData from "data/author-data";

const printSvg = require("../static/image/_ionicons_svg_md-print.svg");
const downloadSvg = require("../static/image/_ionicons_svg_md-download.svg");

@inject("store")
@observer
class ArDemo extends React.Component<any, any> {
  // public authorData: any;

  // componentDidMount() {
  //   this.props.store.applyLanguage();
  // }

  constructor(props: any) {
    super(props);
    this.props.store.applyLanguage();
  }

  print() {
    if (document.execCommand("print")) {
      return;
    }
    window.print();
  }

  render() {

    return (
      <div className="ar-demo pt-4 print-pt-0">

      </div>
    );
  }
}

export default withNamespaces("common")(ArDemo);
