import React from "react";
import classnames from "classnames";
import shortid from "shortid";

const DFCheckBox = props => {
  return (
    <div
      key={"cb" + props.formfield.key}
      className={classnames(props.classes)}
      rel={props.formfield.checkboxname}
    >
      {props.formfield.options.map((option, index) => {
        return (
          <div key={option.key + "_" + index}>
            <label>
              <input
                type={props.formfield.inputtype || "checkbox"}
                name={props.formfield.checkboxname}
                value={option.value}
                id={option.key || shortid.generate()}
                onClick={e => {
                  props.checkboxOptionsSelected(
                    e,
                    props.formfield.checkboxname
                  );
                }}
              />
              <span style={{ textTransform: "capitalize" }}>
                {option.fieldname || option.value}
              </span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default DFCheckBox;
