import React from "react";

const SubForm = props => {
  return (
    <div>
      <div className="row">
        <div className="input-field col s12 s12 m6 l6">
          <input
            id="multi_filednamekey"
            type="text"
            className="validate"
            name="multifilednamekey"
            onChange={e => {
              props.handleOnChange(e);
            }}
          />
          <label htmlFor="multi_filednamekey">Common Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12 col s12 m3 l3">
          <input
            id="multi_key"
            type="text"
            className="validate"
            name="multikey"
            onChange={e => {
              props.handleOnChange(e);
            }}
          />
          <label htmlFor="multi_key">Key/Name</label>
        </div>
        <div className="input-field col s12 col s12 m3 l3">
          <input
            id="multi_value"
            type="text"
            className="validate"
            name="multivalue"
            onChange={e => {
              props.handleOnChange(e);
            }}
          />
          <label htmlFor="multi_value">Value</label>
        </div>
        <div className="input-field col s12 col s12 m3 l3">
          <input
            id="multi_fname"
            type="text"
            className="validate"
            name="multifname"
            onChange={e => {
              props.handleOnChange(e);
            }}
          />
          <label htmlFor="multi_fname">Field Name</label>
        </div>
      </div>
    </div>
  );
};

export default SubForm;
