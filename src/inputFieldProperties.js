import React from "react";
import shortid from "shortid";

export default class InputProperties extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputOnChange = this.handleInputOnChange.bind(this);
    this.handleRadioOnChange = this.handleRadioOnChange.bind(this);
    this.handleSelectOnChange = this.handleSelectOnChange.bind(this);
    this.state = {
      labelname: null,
      name: null, // will be label name withoutspaces
      defaultvalue: null,
      required: false,
      customerrmsg: null,
      key: null,
      id: null,
      type: "text"
    };
  }

  componentDidMount() {
    this.setState(prevState => {
      return {
        id: shortid.generate()
      };
    });
  }

  handleRadioOnChange = (e, inputname) => {
    let value = e.target.value === "true" ? true : false;
    console.log("handleRadioOnChange ", value);
    this.setState(prevState => {
      return {
        [inputname]: value
      };
    });
  };

  handleSelectOnChange(e, name) {
    let option = e.target.value;
    console.log("handleSelectOnChange : ", option, name);
    this.setState(prevState => {
      return {
        [name]: option
      };
    });
  }

  handleInputOnChange = (e, inputname) => {
    let value = e.target.value.trim();
    let object = {};
    object[inputname] = value;
    if (inputname === "labelname") {
      let name = value.replace(/ /g, "");
      this.setState(prevState => {
        return {
          [inputname]: value,
          key: name,
          name
        };
      });
    } else {
      this.setState(prevState => {
        return {
          [inputname]: value
        };
      });
    }
  };

  handleFormOnSubmit(e) {
    e.preventDefault();
    e.persist();
    document.getElementById("labelname").value = null;
    let payload = Object.assign({}, this.state);
    this.setState(prevState => {
      return {
        inputtype: "input",
        labelname: null,
        name: null, // will be label name withoutspaces
        defaultvalue: null,
        required: false,
        customerrmsg: null,
        key: null,
        id: shortid.generate()
      };
    });
    this.props.addInputFieldToForm(payload);
    document.getElementById("labelname").value = null;
    document.getElementById("errormsg").value = null;
    document.getElementById("defaultvalue").value = null;
    //document.querySelectorAll("input[name=required]:checked")
  }

  render() {
    return (
      <form
        onSubmit={e => {
          this.handleFormOnSubmit(e);
        }}
      >
        <div className="input-field col s12">
          <input
            id="labelname"
            type="text"
            className="validate"
            onChange={e => {
              this.handleInputOnChange(e, "labelname");
            }}
            required
          />
          <label htmlFor="labelname">Label Name</label>
          <span className="helper-text" data-error="Mandatory Field" />
        </div>
        <div className="input-field col s12">
          <select
            defaultValue="none"
            onChange={e => {
              this.handleSelectOnChange(e, "type");
            }}
          >
            <option value="none" disabled>
              Choose your option
            </option>
            <option value="text">Text</option>
            <option value="password">Password</option>
            <option value="number">Number</option>
          </select>
          <label>Select Input Text</label>
        </div>
        <div className="input-field col s12">
          <input
            id="defaultvalue"
            type="text"
            className="validate"
            onChange={e => {
              this.handleInputOnChange(e, "defaultvalue");
            }}
          />
          <label htmlFor="defaultvalue">Default Value</label>
          <span className="helper-text" data-error="Mandatory Field" />
        </div>
        <div className="input-field col s12">
          <div className="col s4">Is Field Mandatory</div>
          <div className="col s4">
            <label>
              <input
                name="required"
                type="radio"
                value="true"
                className="with-gap"
                onChange={e => {
                  this.handleRadioOnChange(e, "required");
                }}
              />
              <span>Yes</span>
            </label>
          </div>
          <div className="col s4">
            <label>
              <input
                name="required"
                type="radio"
                value="false"
                className="with-gap"
                onChange={e => {
                  this.handleRadioOnChange(e, "required");
                }}
              />
              <span>No</span>
            </label>
          </div>
        </div>
        <div className="input-field col s12">
          <input
            id="errormsg"
            type="text"
            className="validate"
            onChange={e => {
              this.handleInputOnChange(e, "customerrmsg");
            }}
          />
          <label htmlFor="error_msg">Custom Error Message</label>
        </div>
        <button className="waves-effect waves-light btn"> Save </button>
      </form>
    );
  }
}
