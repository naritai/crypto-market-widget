import React from "react";
import { connect } from 'react-redux';
import "./market-widget-body.css";

const mapStateToProps = (state: any) => {
  return {
    state
  }
};

const mapDispatchToProps = (dispatch: any) => {

}


const MarketWidgetBody = ({ state }: any) => {
  console.log(state)
  return (
    <div className="market-widget__body">
      <h1>{state}</h1>
    </div>
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketWidgetBody);
