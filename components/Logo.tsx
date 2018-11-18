import * as React from "react";

export default class Logo extends React.Component<any, any> {
  render() {
    return (
      <div className="d-flex align-items-center">
        <span
          className="small text-warning"
          style={{ fontSize: "40px", paddingRight: 3 }}
        >
          Road
        </span>
        <div>
          <div style={{ fontSize: "12px" }}>
            <div className="text-muted">of</div>
            <div className="text-primary">Ting Wei</div>
          </div>
        </div>
      </div>
    );
  }
}
