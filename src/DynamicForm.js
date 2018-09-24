import React from "react";
import classnames from "classnames";

export default class DynamicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: ["input-field", "col", "s12", "m12", "l12"],
      formfields: [
        {
          type: "text",
          key: "firstname", // should be withoutspace
          fieldname: "First Name"
        },
        {
          type: "text",
          key: "lastname", // should be withoutspace
          fieldname: "Last Name"
        },
        {
          type: "text",
          key: "eduqual", // should be withoutspace
          fieldname: "Qualification"
        }
      ]
    };
    this.renderForm = this.renderForm.bind(this);
  }

  renderForm = () => {
    //let formInput = this.state.formfields;
    let formUI = this.state.formfields.map(formfield => {
      return (
        <div
          className={classnames(this.state.classes)}
          key={"k" + formfield.key}
        >
          <input
            id={formfield.key}
            type={formfield.type}
            className="validate"
          />
          <label htmlFor={formfield.key}>{formfield.fieldname}</label>
        </div>
      );
    });
    return formUI;
  };

  render() {
    return (
      <div>
        <b>DynamicForm</b>
        {this.renderForm()}
      </div>
    );
  }
}
