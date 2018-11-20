import * as React from "react";
import Logo from "./Logo";

export default class PrintTopNav extends React.Component<any, any> {
  render() {
    return (
      <div className="d-none col-12 print-d-block page-break-before my-5">
        <div className="border-bottom d-flex justify-content-between align-items-end flex-wrap">
          <Logo />
          <div className="small pb-2 text-muted">
          This PDF build from <a href="https://road-of-ting-wei.herokuapp.com/">road-of-ting-wei.herokuapp.com</a> using printing servive of chrome browser.
          </div>
        </div>
      </div>
    );
  }
}
