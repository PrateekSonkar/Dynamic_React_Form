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
import CreateForm from "./createForm";

export default class DynamicForm extends React.Component {
  constructor(props) {
    super(props);
    this.initSelectDropDown = this.initSelectDropDown.bind(this);
    this.radioOptionSelected = this.radioOptionSelected.bind(this);
    this.checkboxOptionsSelected = this.checkboxOptionsSelected.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDropDownChange = this.onDropDownChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleFormView = this.handleFormView.bind(this);
    this.onRadioChange = this.onRadioChange.bind(this);
    this.addNewFieldToForm = this.addNewFieldToForm.bind(this);
    this.addNewOption = this.addNewOption.bind(this);
    this.saveFormToDB = this.saveFormToDB.bind(this);
    this.subFormOnChange = this.subFormOnChange.bind(this);
    this.state = {
      isDOMLoaded: false,
      visibleform: ""
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
    e.persist();
    let payload = {};
    e.target.childNodes.forEach(child => {
      console.log("from loop _ " + child.getAttribute("rel"));
      let refKey = child.getAttribute("rel");
      if (refKey) {
        payload[refKey] = this.state[refKey];
      } else {
        console.log("Found out null ref skipped to add !!");
      }
    });
    console.log("payload ", payload);
  }

  initSelectDropDown() {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems);
  }

  // for creating form

  handleFormView = e => {
    e.preventDefault();
    let newValue = e.target.value;
    console.log("handle form view");
    this.setState(
      prevState => {
        return {
          visibleform: newValue
        };
      },
      () => {
        this.initSelectDropDown();
      }
    );
  };

  onRadioChange = e => {
    console.log("handle radio change");
  };

  addNewFieldToForm(fieldObj) {
    console.log("addNewFieldToForm : ", fieldObj);
  }

  addNewOption(optionObj) {
    console.log("addNewOption : ", optionObj);
  }

  saveFormToDB(formObj) {
    console.log("saveFormToDB : ", formObj);
  }

  subFormOnChange(e) {
    e.persist();
    let name = e.target.getAttribute("name");
    let value = e.target.value;
    this.setState(prevState => {
      return {
        [name]: value
      };
    });
  }

  updateFormObject(formObject, toBeUpdated) {}

  render() {
    return (
      <div>
        <h5>{datasource.formtitle || "Form"}</h5>
        {/*<div className="container">
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
        </div>*/}
        <div className="container">
          <CreateForm
            handleFormView={this.handleFormView}
            visibleType={this.state.visibleform}
            onRadioChange={this.onRadioChange}
            addNewFieldToForm={this.addNewFieldToForm}
            addNewOption={this.addNewOption}
            saveFormToDB={this.saveFormToDB}
            subFormOnChange={this.subFormOnChange}
          />
        </div>
      </div>
    );
  }
}
