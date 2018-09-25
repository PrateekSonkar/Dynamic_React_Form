import React from "react";
import classnames from "classnames";
// import DynamicFormInput from "./DynamicFormInput";
// import DynamicFormCheckBox from "./DynamicFormCheckbox";
// import DynamicFormRadio from "./DynamicFormRadio";
// import DynamicFormSelect from "./DynamicFormSelect";
import DFInputs from "./DFInputs";
import DFCheckBox from "./DFCheckBox";
import DFRadio from "./DFRadio";
import DFSelect from "./DFSelect";

export default class DynamicForm extends React.Component {
  constructor(props) {
    super(props);
    this.initSelectDropDown = this.initSelectDropDown.bind(this);
    this.state = {
      isDOMLoaded: false,
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
    this.setState(
      prevState => {
        return {
          isDOMLoaded: true
        };
      },
      () => {
        this.initSelectDropDown();
      }
    );
  }

  initSelectDropDown() {
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
                return (
                  <DFInputs
                    key={index}
                    formfield={formfield}
                    index={index}
                    classes={this.state.classes}
                    className={classnames(this.state.classes)}
                  />
                );
              case "radio":
                return (
                  <DFRadio
                    key={index}
                    formfield={formfield}
                    index={index}
                    classes={this.state.classes}
                    className={classnames(this.state.classes)}
                  />
                );
              case "checkbox":
                return (
                  <DFCheckBox
                    key={index}
                    formfield={formfield}
                    index={index}
                    classes={this.state.classes}
                    className={classnames(this.state.classes)}
                  />
                );
              case "select":
                return (
                  <DFSelect
                    key={index}
                    formfield={formfield}
                    index={index}
                    classes={this.state.classes}
                    className={classnames(this.state.classes)}
                  />
                );
              default:
                return <div />;
            }
          })}
        </div>
      </div>
    );
  }
}
