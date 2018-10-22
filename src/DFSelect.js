import React from "react";
import classnames from "classnames";

const DFSelect = props => {
  return (
    <div
      key={"sl" + props.formfield.key}
      className={classnames(props.classes)}
      rel={props.formfield.name}
    >
      <div>
        <label>
          <select
            defaultValue="none"
            onChange={e => {
              props.onDropDownChange(e, props.formfield.name);
            }}
            name={props.formfield.name}
          >
            <option value="none">Choose your option</option>
            {props.formfield.options.map((optionelem, index) => (
              <option value={optionelem.value} key={index + optionelem.value}>
                {optionelem.label || optionelem.value}
              </option>
            ))}
          </select>
          <label />
        </label>
      </div>
    </div>
  );
};

export default DFSelect;
