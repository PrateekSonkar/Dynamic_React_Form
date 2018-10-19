import React from "react";

const SubInputForm = props => {
  return (
    <div className="col s12 m12 l12">
      <div className="input-field col s12 m4 l4">
        <input
          id="fieldname"
          type="text"
          className="validate"
          name="fieldname"
        />
        <label htmlFor="fieldname">Field Name</label>
      </div>
      <div className="input-field col s12 m4 l4">
        <select>
          <option value="none" disabled>
            Choose your option
          </option>
          <option value="text">Text</option>
          <option value="password">Password</option>
          <option value="number">Number</option>
        </select>
        <label>Select Input Text</label>
      </div>
      <div className="input-field col s12 m4 l4">
        <input id="key_name" type="text" className="validate" name="key" />
        <label htmlFor="key_name">Key/Name</label>
      </div>
      <div className="col s12">
        <span>Is Mandatory ?</span>
        <div className="input-field inline">
          <div className="col s12 m6 l6">
            <label>
              <input
                className="with-gap"
                name="isrequired"
                type="radio"
                value="true"
              />
              <span>True</span>
            </label>
          </div>
          <div className="col s12 m6 l6">
            <label>
              <input
                className="with-gap"
                name="isrequired"
                type="radio"
                value="false"
              />
              <span>False</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubInputForm;
