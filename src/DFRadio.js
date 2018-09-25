import React from "react";
import classnames from "classnames";
import shortid from "shortid";

const DFRadio = props => {
  return (
    <div key={props.formfield.key} className={classnames(props.classes)}>
      <div>
        <label>
          <input
            className="with-gap"
            type={props.formfield.inputtype || "radio"}
            name={props.formfield.radioname}
            value={props.formfield.value}
            id={props.formfield.key || shortid.generate()}
          />
          <span style={{ textTransform: "capitalize" }}>
            {props.formfield.fieldname || props.formfield.value}
          </span>
        </label>
      </div>
    </div>
  );
};

export default DFRadio;
