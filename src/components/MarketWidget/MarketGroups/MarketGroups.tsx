import { Button, FormControl, Select, MenuItem, InputBase } from '@material-ui/core';
import React from "react";
import "./market-groups.css";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { setAssetFilter } from '../../../store/actions';
import { ASSETS_FILTER } from '../../../utils/marketWidget';

const mapStateToProps = (state: any) => {
  return {
    filter: state.marketWidget.filter
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ setAssetFilter }, dispatch);
};

const MarketGroups = ({ setAssetFilter, filter }: any) => {

  const setBTCParentMarket = () => {
    setAssetFilter(ASSETS_FILTER.BTC)
  };

  const setBNBParentMarket = () => {
    setAssetFilter(ASSETS_FILTER.BNB)
  };

  const setMargin = () => {
    setAssetFilter(ASSETS_FILTER.MARGIN);
  };

  const handleALTSChange = (event: any) => {
    console.log(event.target.value)
  }

  return (
    <div className="market-groups">
      <Button color="primary" onClick={setMargin}>
        Margin
      </Button>

      <Button onClick={setBNBParentMarket}>
        BNB
      </Button>

      <Button onClick={setBTCParentMarket}>
        BTC
      </Button>

      {/* <Button>
        ALTS
      </Button> */}

      <FormControl>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={ASSETS_FILTER.ALTS}
          onChange={handleALTSChange}
          input={<InputBase />}
        >
          <MenuItem value={ASSETS_FILTER.ALTS}>ALTS</MenuItem>
          <MenuItem value={ASSETS_FILTER.XPR}>XPR</MenuItem>
          <MenuItem value={ASSETS_FILTER.ETH}>ETH</MenuItem>
          <MenuItem value={ASSETS_FILTER.TRX}>TRX</MenuItem>
        </Select>
      </FormControl>

      <Button>
        USD@
      </Button>
    </div>
  )
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MarketGroups);
