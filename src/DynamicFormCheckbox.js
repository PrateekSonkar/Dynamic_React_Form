import React from "react";
import classnames from "classnames";
import shortid from "shortid";

export default class DynamicFormCheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: ["input-field", "col", "s12", "m6", "l3"],
      formfields: [
        {
          inputtype: "checkbox",
          key: "firstname", // should be withoutspace
          fieldname: "color red",
          value: "red",
          checkboxname: "colors"
        },
        {
          inputtype: "checkbox",
          key: "firstname1", // should be withoutspace
          fieldname: "color blue",
          value: "blue",
          checkboxname: "colors"
        },
        {
          inputtype: "checkbox",
          key: "firstname2", // should be withoutspace
          fieldname: "color green",
          value: "green",
          checkboxname: "colors"
        }
      ]
    };

    //
  }

  renderForm = () => {
    //let formInput = this.state.formfields;
    let formUI = this.state.formfields.map(formfield => {
      return (
        <div key={formfield.key} className={classnames(this.state.classes)}>
          <div>
            <label>
              <input
                type={formfield.inputtype || "checkbox"}
                name={formfield.checkboxname}
                value={formfield.value}
                id={formfield.key || shortid.generate()}
              />
              <span style={{ "text-transform": "capitalize" }}>
                {formfield.fieldname || formfield.value}
              </span>
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
