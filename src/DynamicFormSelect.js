import React from "react";
import classnames from "classnames";
import shortid from "shortid";

export default class DynamicFormSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "none",
      classes: ["input-field", "col", "s12", "m6", "l3"],
      formfields: [
        {
          inputtype: "select",
          ukey: "firstname", // should be withoutspace
          options: [
            { value: "abc", fieldname: "No thing" },
            { value: "abc1", fieldname: "No thing 1" },
            { value: "abc2", fieldname: "No thing 2" }
          ]
        }
      ]
    };
  }

  componentWillMount() {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems);
  }

  renderForm = () => {
    //let formInput = this.state.formfields;
    let formUI = this.state.formfields.map(formfield => {
      return (
        <div key={formfield.ukey} className={classnames(this.state.classes)}>
          <div>
            <label>
              <select defaultValue={this.state.value}>
                <option value="none">Choose your option</option>
                {formfield.options.map((optionelem, index) => (
                  <option
                    value={optionelem.value}
                    key={index + optionelem.value}
                  >
                    {optionelem.fieldname || optionelem.value}
                  </option>
                ))}
              </select>
              <label>Materialize Select</label>
            </label>
          </div>
        </div>
      );
    });
    return formUI;
  };

  render() {
    return <div>{this.renderForm()}</div>;
  }
}
