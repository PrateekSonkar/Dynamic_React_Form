import React from "react";
import classnames from "classnames";
import shortid from "shortid";

const DFRadio = props => {
  return (
    <div
      key={"r" + props.formfield.id}
      className={classnames(props.classes)}
      rel={props.formfield.name}
    >
      {props.formfield.options.map((option, index) => {
        return (
          <div key={option.key + "_" + index}>
            <label>
              <input
                className="with-gap"
                type={props.formfield.inputtype || "radio"}
                name={props.formfield.name}
                value={option.value}
                id={option.key || shortid.generate()}
                onClick={e => {
                  console.log("Radio Got Clicked !!");
                  props.radioOptionSelected(e, props.formfield.name);
                }}
              />
              <span style={{ textTransform: "capitalize" }}>
                {option.label || option.value}
              </span>
            </label>
          </div>
        );
      })}

      {/*<div>
        <label>
          <input
            className="with-gap"
            type={props.formfield.inputtype || "radio"}
            name={props.formfield.radioname}
            value={props.formfield.value}
            id={props.formfield.key || shortid.generate()}
            onClick={e => {
              console.log("Radio Got Clicked !!");
              props.radioOptionSelected(e, props.formfield.radioname);
            }}
          />
          <span style={{ textTransform: "capitalize" }}>
            {props.formfield.fieldname || props.formfield.value}
          </span>
        </label>
      </div>*/}
    </div>
  );
};

export default DFRadio;
