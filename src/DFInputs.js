import React from "react";
import classnames from "classnames";

const DFInputFields = props => {
  return (
    <div className={classnames(props.classes)} key={"k" + props.formfield.key}>
      <input
        id={props.formfield.key}
        type={props.formfield.type}
        className="validate"
      />
      <label htmlFor={props.formfield.key}>{props.formfield.fieldname}</label>
    </div>
  );
};

export default DFInputFields;
