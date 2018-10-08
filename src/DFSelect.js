import React from "react";
import classnames from "classnames";

const DFSelect = props => {
  return (
    <div key={props.formfield.ukey} className={classnames(props.classes)}>
      <div>
        <label>
          <select
            defaultValue="none"
            onChange={e => {
              props.onDropDownChange(e, props.formfield.selectname);
            }}
            name={props.formfield.selectname}
          >
            <option value="none">Choose your option</option>
            {props.formfield.options.map((optionelem, index) => (
              <option value={optionelem.value} key={index + optionelem.value}>
                {optionelem.fieldname || optionelem.value}
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
