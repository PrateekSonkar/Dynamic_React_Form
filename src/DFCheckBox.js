import React from "react";
import classnames from "classnames";
import shortid from "shortid";

const DFCheckBox = props => {
  return (
    <div key={"cb" + props.formfield.key} className={classnames(props.classes)}>
      <div>
        <label>
          <input
            type={props.formfield.inputtype || "checkbox"}
            name={props.formfield.checkboxname}
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

export default DFCheckBox;
