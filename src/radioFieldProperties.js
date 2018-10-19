import React from "react";
import shortid from "shortid";

export default class RadioProperties extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputOnChange = this.handleInputOnChange.bind(this);
    this.state = {
      labelname: null,
      name: null, // will be label name withoutspaces
      defaultvalue: null,
      required: false,
      customerrmsg: null,
      key: null,
      id: null,
      type: "radio"
    };
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

  render() {
    return (
      <form
        onSubmit={e => {
          this.handleFormOnSubmit(e);
        }}
      >
        <div className="row">
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
        </div>
        <div className="row">
          <table>
            <thead>
              <tr>
                <th>Label</th>
                <th>Value</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Alvin</td>
                <td>Eclair</td>
              </tr>
              <tr>
                <td>Alan</td>
                <td>Jellybean</td>
              </tr>
              <tr>
                <td>Jonathan</td>
                <td>Lollipop</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <a className="waves-effect waves-light btn"> Add Row </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="row">
          <button className="waves-effect waves-light btn"> Save </button>
        </div>
      </form>
    );
  }
}
