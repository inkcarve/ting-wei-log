import * as React from "react";
import { observer, inject } from "mobx-react";
// import "./ArDemo.scss";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import 'aframe';
// import 'aframe-particle-system-component';
// import {Entity, Scene} from 'aframe-react';
// import {
//   ListGroup,
//   ListGroupItem
//   // ListGroupItemHeading,
//   // ListGroupItemText
// } from "reactstrap";
// import { initStore } from "../store/store";
import { dangeriousHtmlMarkup } from "../common/html-service";
// import PrintTopNav from "../components/PrintTopNav";
import { i18n, withNamespaces } from "../i18n/i18n";
import MapDetailListItems from "./MapDetailListItems";
import { observable, action } from "mobx";
// import { observable, computed } from "mobx";
// import { observable, action } from "mobx";
// import authorData from "data/author-data";

declare global {
  interface Window {
    aframe: any;
    AFRAME: any;
  }
}

let AframeReact: any;
// let Entity: any;
// let Scene: any;
// let Assets: any;
@inject("store")
@observer
class VrDemo extends React.Component<any, any> {

  UNSAFE_componentWillMount() {
    if (typeof window === 'undefined') {
      return;
    }
    if (window.aframe) {
      delete window.aframe;
    }

    require("aframe");
    require("aframe-particle-system-component");
    // import {Entity, Scene} from 'aframe-react';
    // AframeReact = require("aframe-react");
    // console.log(AframeReact);
    // Entity = AframeReact.Entity;
    // Scene = AframeReact.Scene;
    // Assets = AframeReact.Assets;

    if (!AFRAME.components["change-box"]) {
      AFRAME.registerComponent("change-box", {
        init() {
          let lastIndex = 2;
          const styles = [
            {
              color: "#ff1100",
              // geometry: "cone",
              scale: "3.0 3.0 3.0"
            },
            {
              color: "#f5f200",
              // geometry: "sphere",
              scale: "0.5 0.5 0.5"
            },
            {
              color: "#ff00f8",
              // geometry: "box",
              scale: "1.0 1.0 1.0"
            }
          ];
          // const boxScale = window.document.getElementById("box_scale");
          this.el.addEventListener("click", async function(evt) {
            console.log(styles);
            // await boxScale.setAttribute('from',styles[lastIndex].scale);
            lastIndex = await ((lastIndex + 1) % styles.length);
            // await boxScale.setAttribute('to',styles[lastIndex].scale);
            this.setAttribute("material", "color", styles[lastIndex].color);
            this.emit("box_scale" + lastIndex);
            console.log("I was clicked at: ", evt.detail.intersection.point);
          });
        }
      });

      //
    }

    console.log(AFRAME);
  }

  loadendCallback = ()=>{
      setTimeout(()=>{
        this.modalToggle();
      }, 500 );
  }
  // timerLoadEnvGltf:any = null;
  // time = 0;
  componentDidMount(){
    const envGltfImg = document.createElement('img');
    envGltfImg.src = 'static/gltf/fantasy_sky_background/textures/Material__25__background_JPG_002_emissive.jpg';
    envGltfImg.onload = this.loadendCallback;
    console.log(envGltfImg);
  }

  @observable modalShow = true;
  @action modalToggle = ()=> {
    this.modalShow = !this.modalShow;
  }
  

  constructor(props: any) {
    super(props);
    this.props.store.applyLanguage();
  }

  render() {
    if (typeof window=== 'undefined') {
      return null;
    }

    return (
      <div className="vr-demo pt-4">
        <a-scene data-aframe-inspector="true">
          <a-assets>
            <a-asset-item
              env-gltf=""
              id="envGltf"
              src="static/gltf/fantasy_sky_background/scene.gltf"
            />
          </a-assets>
          <a-gltf-model src="#envGltf" position="0 0 0">
            <a-animation
              attribute="rotation"
              begin="500"
              easing="linear"
              dur="22000"
              from="0 0 0"
              to="0 360 0"
              repeat="indefinite"
            />
          </a-gltf-model>

          <a-text
            position="-1.46653 2 -2.40167"
            welcome-text=""
            value="Look The Box"
            side="double"
            align="center"
            geometry="primitive:plane;width:1.7;height:0.5"
            material="color:#FFFFFF;side:double;emissive:#ffffff;opacity:0.2"
            text=""
            scale="1.000000140492798 1.000000140492798 1.000000140492798"
            rotation="-54.86471958834224 -64.32425278595214 89.29661828672906"
          >
            <a-animation
              begin="0"
              dur="2000"
              direction="alternate"
              attribute="scale"
              from="1 1 1"
              to="1.2 1.2 1.2"
              repeat="indefinite"
              end=""
            />
            <a-animation
              begin="0"
              dur="2000"
              direction="alternate"
              attribute="rotation"
              from="-54.86471958834224 -64.32425278595214 89.29661828672906"
              to="-4.172851621937786 11.256328843140153 -20.21223213883005"
              repeat="indefinite"
            />
          </a-text>

          {/* <a-text position="-1.46653 2 0.922" welcome-text="" value="Welcome !!" side="double" align="center" geometry="primitive:plane;width:2;" material="color:#FFFFFF;side:double;emissive:#ffffff;opacity:0.2" text="" scale="1.0000002406103998 1.0000002406103998 1.0000002406103998" rotation="10 37.088536392826704 0">
      <a-animation begin="0" dur="2000" direction="alternate" attribute="scale" from="1 1 1" to="1.2 1.2 1.2" repeat="indefinite" end=""></a-animation>
      <a-animation begin="0" dur="2000" direction="alternate" attribute="rotation" from="10 37.088536392826704 0" to="0 57.088536392826704 0" repeat="indefinite"></a-animation>
    </a-text> */}

          {/* <a-text position="3.28525 2 -3.30167" value="Look the Box" side="double" align="center" geometry="primitive:plane;width:1.7;height:0.5;" material="color:#FFFFFF;side:double;emissive:#ffffff;opacity:0.2" text="" scale="1.0951892739202171 1.0951892739202171 1.0951892739202171" rotation="5.24053630398914 -46.60746378484842 0">
      <a-animation begin="0" dur="2000" direction="alternate" attribute="scale" from="1 1 1" to="1.2 1.2 1.2" repeat="indefinite" end=""></a-animation>
      <a-animation begin="0" dur="2000" direction="alternate" attribute="rotation" from="10 -37.088536392826704 0" to="0 -57.088536392826704 0" repeat="indefinite"></a-animation>
    </a-text> */}
          <a-entity id="cameraWrapper" position="0 1 5">
            <a-entity
              camera="active: true"
              look-controls="true"
              wasd-controls="true"
              mouse-cursor="true"
            >
              <a-entity
                cursor="fuse: true; fuseTimeout: 500; rayOrigin: entity;"
                position="0 0 -1"
                geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
                material="color: black; shader: flat"
              />
            </a-entity>
          </a-entity>

          <a-entity
            id="box"
            change-box=""
            geometry=""
            material="color:#ff00f8"
            position="1.62512 0 -7.72419"
            rotation="0 -73.42282257262961 0"
          >
            <a-animation
              id="box_scale0"
              begin="box_scale0"
              dur="1000"
              direction="normal"
              attribute="scale"
              from="1 1 1"
              to="3 3 3"
              repeat="0"
            />
            <a-animation
              id="box_scale1"
              begin="box_scale1"
              dur="1000"
              direction="normal"
              attribute="scale"
              from="3 3 3"
              to="0.5 0.5 0.5"
              repeat="0"
            />
            <a-animation
              id="box_scale2"
              begin="box_scale2"
              dur="1000"
              direction="normal"
              attribute="scale"
              from="0.5 0.5 0.5"
              to="1 1 1 "
              repeat="0"
            />
          </a-entity>
          <a-entity light="type: ambient; intensity: 0.1;">
            <a-animation
              begin="0"
              dur="2000"
              direction="alternate"
              attribute="light.intensity"
              from="0.1"
              to="0.4"
              repeat="indefinite"
              end=""
            />
          </a-entity>

          <a-entity
            light="type:spot;color:#96f7ff;intensity:0.6;penumbra:1;castShadow:true"
            position="7.30778 4.66448 -1.34723"
            rotation="-27.079704271268103 0 0"
          />
        </a-scene>

        {/* <Scene>
        <a-assets>
            <a-asset-item
              id="envGltf"
              src="static/gltf/fantasy_sky_background/scene.gltf"
            />
          </a-assets>
        </Scene> */}
        {/* <Entity
            geometry={{ primitive: "box" }}
            material={{ color: "red" }}
            position={{ x: 0, y: 0, z: -5 }}
          /> */}
        {/* <Entity particle-system={{ preset: "rain" }} />
          <Entity light={{ type: "point" }} />
          <Entity gltf-model="static/gltf/van_gogh_room/scene.gltf" position={{ x: 0, y: 0, z: -3 }}/>
          <Entity text={{ value: "Hello, WebVR!" }} /> */}
        {/* </Scene> */}

        <div>
   
        <Modal isOpen={this.modalShow} className="modal-dialog-centered">

          <ModalBody>
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <h6 className="text-center mt-3">Loading</h6>
          </ModalBody>

        </Modal>
      </div>
      </div>
    );
  }
}

export default withNamespaces("common")(VrDemo);
