import * as React from "react";
import { observer } from "mobx-react";
import "./Resume.scss";
import {
  ListGroup,
  ListGroupItem
  // ListGroupItemHeading,
  // ListGroupItemText
} from "reactstrap";
// import { initStore } from "../store/store";
import { dangeriousHtmlMarkup } from "../common/html-service";
// import PrintTopNav from "../components/PrintTopNav";
// import { i18n, withNamespaces } from "../i18n/i18n";
// import { observable, action } from "mobx";
// import authorData from "data/author-data";

// const printSvg = require("../static/image/_ionicons_svg_md-print.svg");
// const downloadSvg = require("../static/image/_ionicons_svg_md-download.svg");
// import { html2pdf } from '../common/html2pdf';

@observer
class MapDetailListItems extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  private mapListGroupItem = (lists: any) => {
    return lists.map((obj: any, i: number) => {
      return (
        <ListGroupItem key={i}>
          <h5 className="font-weight-normal title mb-2">
            <div>
              <h5 className="mb-1">
                {obj.title}
                <small className="pl-2 text-warning">{obj.titleEn} </small>
              </h5>
            </div>
            <div className="small">
              <div
                dangerouslySetInnerHTML={dangeriousHtmlMarkup(obj.content)}
              />
            </div>
          </h5>
        </ListGroupItem>
      );
    });
  };

  private mapDetailListItems = (lists: any) => {
    if (!lists) {
      return;
    }
    return lists.map((obj: any, i: number) => {
      return (
        <div key={i}>
          <h5 className="font-weight-normal title">
            <div className="mb-1">
              {obj.title ||
                (obj.titleEn && (
                  <span>
                    {obj.title}
                    <small className="pl-1">{obj.titleEn} :</small>
                  </span>
                ))}
            </div>
            <div className="small detail">
              <div dangerouslySetInnerHTML={dangeriousHtmlMarkup(obj.detail)} />
            </div>
          </h5>
          <div className="detail-list">
            <h5>{obj.listGroupTitle}</h5>
            {obj.listGroup && (
              <ListGroup className="mb-4">
                {this.mapListGroupItem(obj.listGroup)}
              </ListGroup>
            )}
          </div>
        </div>
      );
    });
  };

  render() {
    return <div>{this.mapDetailListItems(this.props.lists)}</div>;
  }
}

export default MapDetailListItems;
