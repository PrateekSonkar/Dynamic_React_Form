import React from "react";
import InputProperty from "./inputFieldProperties";
import RadioProperty from "./radioFieldProperties";

export default class ParentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormView = this.handleFormView.bind(this);
    this.handlePropertiesSubmit = this.handlePropertiesSubmit.bind(this);
    this.handleInputOnChange = this.handleInputOnChange.bind(this);
    this.addInputFieldToForm = this.addInputFieldToForm.bind(this);
    this.state = {
      formname: null,
      collectionname: "",
      formfields: []
    };
  }

  componentDidMount() {
    this.initSelectDropDown();
  }
  // for creating form
  initSelectDropDown() {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems);
  }

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

  handlePropertiesSubmit(e) {
    //will be pushing data to form field collection
    console.log("message from handlePropertiesSubmit", e);
  }

  handleInputOnChange = (e, inputname) => {
    let value = e.target.value.trim();
    this.setState(prevState => {
      return {
        [inputname]: value
      };
    });
  };

  addInputFieldToForm(payload) {
    console.log("from addInputFieldToForm : ", payload);
    this.setState(prevState => {
      return {
        formfields: prevState.formfields.concat([payload])
      };
    });
  }

  render() {
    return (
      <div className="container">
        <b>Custom Form Builder</b>
        <div className="row">
          <div className="input-field col s4">
            <input
              id="formname"
              type="text"
              className="validate"
              onChange={e => {
                this.handleInputOnChange(e, "formname");
              }}
              required
            />
            <label htmlFor="formname">Form Name</label>
            <span className="helper-text" data-error="Mandatory Field" />
          </div>
          <div className="input-field col s4">
            <input
              id="collectionname"
              type="text"
              className="validate"
              onChange={e => {
                this.handleInputOnChange(e, "collectionname");
              }}
              required
            />
            <label htmlFor="collectionname">Collection Name</label>
            <span className="helper-text" data-error="Mandatory Fields" />
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <div className="row">
              <div className="input-field col s12">
                <select
                  onChange={e => {
                    this.handleFormView(e);
                  }}
                  defaultValue="none"
                >
                  <option value="none" disabled>
                    Choose your option
                  </option>
                  <option value="input">Input Field</option>
                  <option value="radio">Radio Field</option>
                  <option value="checkbox">Checkbox Field</option>
                  <option value="select">Select Field</option>
                </select>
                <label>Select Inputing Option</label>
              </div>
            </div>
            <div className="row">
              <b>Form Fields Properties</b>
              {this.state.visibleform === "input" ? (
                <InputProperty addInputFieldToForm={this.addInputFieldToForm} />
              ) : null}
              {this.state.visibleform === "radio" ? (
                <RadioProperty addInputFieldToForm={this.addInputFieldToForm} />
              ) : null}
            </div>
          </div>
          <div className="col s6">preview</div>
        </div>
      </div>
    );
  }
}
