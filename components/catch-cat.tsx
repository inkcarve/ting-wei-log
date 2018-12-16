import * as React from "react";
import { connect } from "react-redux";
import { onReset, onCatch, onDog } from "../redux/actions";
import "./catch-cat.scss";

const CatchCat = ({ state, onCatch, onReset, onDog }:any):any => {
  console.log(onCatch);
  const mapRooms = (state: any) => {
    return (
      <div className="row justify-content-center door py-2">
      <div className="col-12">
        <h6 className="text-muted small w-100">下面有四道門請選擇進行遊戲，直到找到小貓</h6>
        <div className="border w-100 d-flex flex-wrap ">
        {state.data.map((obj: any, i: number) => {
          return (
            <div key={obj.id} className="flex-grow-1 w-50 p-1">
              <button
                className={`btn btn-${obj.feature.color} d-block w-100 rounded-0 py-4`}
                onClick={() => {
                  onCatch(obj.id);
                }}
                disabled={!state.ifPlaying}
              >
                門 {obj.id+1}
              </button>
            </div>
          );
        })}
        </div>
      </div>
      </div>
    );
  };
  return (
    <div className="catch-cat">
      <div className="container-fluid pt-4">
        <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-8 col-xl-6">
        <div className="border-bottom mb-3">
        {state.story.map((data:any,i:number)=>(<h6 className="text-secondary font-weight-light" key={i}>{data.text}</h6>))}
        </div>
        <div className={`${state.log.length===0 ? "d-none " : ""}mb-3`}>
        {state.log.map((data:any,i:number)=> {
        if(data.end) {
          return (<h6 className="border-bottom" key={i}/>);
        }
        if(data.fontSize==='strong') {
          return (<h4 className={`text-${data.color?data.color:'warning'}`} key={i}>{data.text}</h4>);
        }
        return (<h6 className={`text-${data.color?data.color:'secondary'} font-weight-light`} key={i}>{data.text}</h6>);
        })}
        </div>
        {state.ifPlaying && mapRooms(state)}
        <div className="my-3 d-flex justify-content-end">

        <button className={`${state.ifDog || state.youReached<3 ? "d-none " : ""}btn btn-outline-secondary mr-2`} onClick={onDog}>
          使用道具
        </button>
        <button className="btn btn-outline-primary" onClick={onReset}>
          {state.now !== null && "重新"}開始遊戲
        </button>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  console.log("mapStateToProps");
  return { state };
};

const mapDisptachToProps = (dispatch: any, ownProps: any) => {
  return {
    onCatch: (id: any) => {
      console.log(id);
      return dispatch(onCatch(id));
    },
    onReset: () => dispatch(onReset()),
    onDog: () => dispatch(onDog())
  };
};

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(CatchCat);
