import React from "react";
import classnames from "classnames";
// import DynamicFormInput from "./DynamicFormInput";
// import DynamicFormCheckBox from "./DynamicFormCheckbox";
// import DynamicFormRadio from "./DynamicFormRadio";
// import DynamicFormSelect from "./DynamicFormSelect";
import datasource from "../datasource/datasource";
import DFInputs from "./DFInputs";
import DFCheckBox from "./DFCheckBox";
import DFRadio from "./DFRadio";
import DFSelect from "./DFSelect";

export default class DynamicForm extends React.Component {
  constructor(props) {
    super(props);
    this.initSelectDropDown = this.initSelectDropDown.bind(this);
    this.radioOptionSelected = this.radioOptionSelected.bind(this);
    this.checkboxOptionsSelected = this.checkboxOptionsSelected.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDropDownChange = this.onDropDownChange.bind(this);
    this.state = {
      isDOMLoaded: false
    };

    console.log("Datasource ", datasource);
  }

  radioOptionSelected = (e, radioname) => {
    console.log("Value passed in : ", radioname);
    let selectedRadioValue = document.querySelector(
      "input[name=" + radioname + "]:checked"
    ).value;
    console.log(" selectedRadioValue : ", selectedRadioValue);
    this.setState(prevState => {
      return {
        [radioname]: selectedRadioValue
      };
    });
  };

  onChange = (e, inputname) => {
    let value = e.target.value.trim();
    this.setState(prevState => {
      return {
        [inputname]: value
      };
    });
  };

  checkboxOptionsSelected = (e, selectname) => {
    console.log("Value passed in checkboxOptionsSelected: ", selectname);
    let checkboxItems = [];
    let selectedCheckboxValues = document.querySelectorAll(
      "input[name=" + selectname + "]:checked"
    );
    selectedCheckboxValues.forEach(function(nodeElem, index) {
      let key = "key" + index;
      let value = nodeElem.value;
      console.log(key, value);
      let temp = {};
      temp[key] = value;
      checkboxItems.push(temp);
    });
    this.setState(prevState => {
      return {
        [selectname]: checkboxItems
      };
    });
  };

  onDropDownChange(e, name) {
    let option = e.target.value;
    console.log("onDropDownChange : ", option, name);
    this.setState(prevState => {
      return {
        [name]: option
      };
    });
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

  onSubmit(e) {
    e.preventDefault();
    console.log("On Submit !!");
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
          <form onSubmit={this.onSubmit}>
            {datasource.formfields.map((formfield, index) => {
              switch (formfield.inputtype) {
                case "input":
                  return (
                    <DFInputs
                      key={index}
                      formfield={formfield}
                      index={index}
                      classes={datasource.classes}
                      className={classnames(datasource.classes)}
                      onChange={this.onChange}
                    />
                  );
                case "radio":
                  return (
                    <DFRadio
                      key={index}
                      formfield={formfield}
                      index={index}
                      classes={datasource.classes}
                      className={classnames(datasource.classes)}
                      radioOptionSelected={this.radioOptionSelected}
                    />
                  );
                case "checkbox":
                  return (
                    <DFCheckBox
                      key={index}
                      formfield={formfield}
                      index={index}
                      classes={datasource.classes}
                      className={classnames(datasource.classes)}
                      checkboxOptionsSelected={this.checkboxOptionsSelected}
                    />
                  );
                case "select":
                  return (
                    <DFSelect
                      key={index}
                      formfield={formfield}
                      index={index}
                      classes={datasource.classes}
                      className={classnames(datasource.classes)}
                      onDropDownChange={this.onDropDownChange}
                    />
                  );
                default:
                  return <div />;
              }
            })}
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
