import { Radio, TextField, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core';
import React from "react";
import "./market-search-panel.css";


const MarketSearchPanel = () => {
  return (
    <div className="market-search-panel">
      <TextField 
        id="standard-basic" 
        margin="dense"
        placeholder="Search"
        fullWidth
      />
    
      <FormControl component="fieldset" className="radio-group-wrapper">
        <RadioGroup 
            aria-label="gender" 
            name="gender1" 
            value={"Change"} 
            onChange={() => {}}
            row
          >
            <FormControlLabel 
              value="Change" 
              control={<Radio />} 
              label="Change"
              labelPlacement="start"
            />
            <FormControlLabel 
              value="Volume" 
              disabled 
              control={<Radio />} 
              label="Volume"
              labelPlacement="start"
            />
          </RadioGroup>
      </FormControl>
    </div>
  )
}

export default MarketSearchPanel;
