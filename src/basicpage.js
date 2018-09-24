import React from "react";
import DynamicFormInput from "./DynamicFormInput";
import DynamicFormCheckBox from "./DynamicFormCheckbox";
import DynamicFormRadio from "./DynamicFormRadio";
import DynamicFormSelect from "./DynamicFormSelect";

export default class DynamicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: ["input-field", "col", "s12", "m6", "l3"],
      formfields: [
        {
          inputtype: "input",
          type: "text",
          key: "firstname", // should be withoutspace
          fieldname: "First Name"
        },
        {
          inputtype: "input",
          type: "text",
          key: "lastname", // should be withoutspace
          fieldname: "Last Name"
        },
        {
          inputtype: "input",
          type: "text",
          key: "eduqual", // should be withoutspace
          fieldname: "Qualification"
        },
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
        },
        {
          inputtype: "radio",
          type: "radio",
          key: "firstname", // should be withoutspace
          fieldname: "color red",
          value: "red",
          radioname: "rcolors"
        },
        {
          inputtype: "radio",
          type: "radio",
          key: "firstname1", // should be withoutspace
          fieldname: "color blue",
          value: "blue",
          radioname: "rcolors"
        },
        {
          inputtype: "radio",
          type: "radio",
          key: "firstname2", // should be withoutspace
          fieldname: "color green",
          value: "green",
          radioname: "rcolors"
        },
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

  render() {
    return (
      <div>
        <h5>Dynamic Form</h5>
        <div className="container">
          {this.state.formfields.map((formfield, index) => {
            switch (formfield.inputtype) {
              case "input":
                return <div>Input</div>;
              case "radio":
                return <div>radio</div>;
              case "checkbox":
                return <div>checkbox</div>;
              case "select":
                return <div>select</div>;
              default:
                return <div />;
            }
          })}

          <div className="row">
            <b>input field</b>
            <DynamicFormInput />
          </div>
          <div className="row">
            <b>Checkbox</b>
            <DynamicFormCheckBox />
          </div>
          <div className="row">
            <b>Radio</b>
            <DynamicFormRadio />
          </div>
          <div className="row">
            <b>Select</b>
            <DynamicFormSelect />
          </div>
        </div>
      </div>
    );
  }
}
