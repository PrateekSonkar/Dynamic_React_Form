import React from "react";
import classnames from "classnames";
import shortid from "shortid";

const DFCheckBox = props => {
  return (
    <div
      key={"cb" + props.formfield.key}
      className={classnames(props.classes)}
      rel={props.formfield.name}
    >
      {props.formfield.options.map((option, index) => {
        return (
          <div key={option.key + "_" + index}>
            <label>
              <input
                type={props.formfield.inputtype || "checkbox"}
                name={props.formfield.name}
                value={option.value}
                id={option.key || shortid.generate()}
                onClick={e => {
                  props.checkboxOptionsSelected(e, props.formfield.name);
                }}
              />
              <span style={{ textTransform: "capitalize" }}>
                {option.label || option.value}
              </span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default DFCheckBox;
