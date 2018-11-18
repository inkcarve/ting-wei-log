import * as React from "react";
import Logo from "./Logo";

export default class PrintTopNav extends React.Component<any, any> {
  render() {
    return (
      <div className="d-none col-12 print-d-block page-break-before my-5">
        <div className="border-bottom">
          <Logo />
        </div>
      </div>
    );
  }
}
