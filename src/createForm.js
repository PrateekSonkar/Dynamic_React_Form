import React from "react";
import SubForm from "./subForm";
import SubInputForm from "./subInputForm";

const CreateForm = props => {
  return (
    <div className="row">
      <form>
        <div className="input-field col s12 m12 l12">
          <input
            id="formname"
            type="text"
            className="validate"
            name="formname"
          />
          <label htmlFor="formname">Form Name</label>
        </div>
        <div className="input-field col s12 m12 l12">
          <div className="input-field col s12 m8 l8">
            <select
              onChange={e => {
                props.handleFormView(e);
              }}
            >
              <option value="none" disabled>
                Choose your option
              </option>
              <option value="input">Text Input</option>
              <option value="radio">Radio</option>
              <option value="checkbox">Checkbox</option>
              <option value="select">Select</option>
            </select>
            <label>Select Input Option</label>
          </div>
          {props.visibleType === "input" ? (
            <SubInputForm />
          ) : (
            <SubForm handleOnChange={props.subFormOnChange} />
          )}
          <div className="row">
            <div className="input-field col s12 m4 l4">
              <a
                className="waves-effect waves-light btn blue"
                onClick={() => {
                  props.addNewFieldToForm("field");
                }}
              >
                Add New Field
              </a>
            </div>
            <div className="input-field col s12 m4 l4">
              <a
                className="waves-effect waves-light btn blue"
                onClick={() => {
                  props.addNewOption("option");
                }}
              >
                Add New Option
              </a>
            </div>
            <div className="input-field col s12 m4 l4">
              <a
                className="waves-effect waves-light btn blue"
                onClick={() => {
                  props.saveFormToDB("form");
                }}
              >
                Save Form
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
