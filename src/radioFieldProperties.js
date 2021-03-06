import React from "react";
import shortid from "shortid";

export default class RadioProperties extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputOnChange = this.handleInputOnChange.bind(this);
    this.addItemToTable = this.addItemToTable.bind(this);
    this.state = {
      labelname: null,
      name: null, // will be label name withoutspaces
      key: null,
      id: null,
      type: "radio",
      inputtype: "radio",
      options: []
    };
  }

  componentDidMount() {
    this.setState(prevState => {
      return {
        id: shortid.generate()
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

  addItemToTable() {
    console.log("addItemToTable");
    let obj = {};
    if (
      Boolean(document.getElementById("rlabelname").value) &&
      Boolean(document.getElementById("rlabelvalue").value)
    ) {
      obj["label"] = document.getElementById("rlabelname").value;
      obj["value"] = document.getElementById("rlabelvalue").value;
      this.setState(
        prevState => {
          return {
            options: prevState.options.concat([obj])
          };
        },
        () => {
          document.getElementById("rlabelname").value = "";
          document.getElementById("rlabelvalue").value = "";
        }
      );
    } else {
      alert("Key in label and value");
    }
  }

  handleFormOnSubmit(e) {
    e.preventDefault();
    let payload = Object.assign({}, this.state);
    this.props.addInputFieldToForm(payload);
    this.setState(
      prevState => {
        return {
          labelname: null,
          name: null, // will be label name withoutspaces
          key: null,
          type: "radio",
          options: [],
          id: shortid.generate()
        };
      },
      () => {
        document.getElementById("labelname").value = null;
        //document.querySelectorAll("input[name=required]:checked")
      }
    );
  }

  render() {
    return (
      <form
        onSubmit={e => {
          this.handleFormOnSubmit(e);
        }}
      >
        <div className="row">
          <h5>Create Radio Options</h5>
        </div>
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
          <strong>Create Options</strong>
          <div>
            <div className="input-field col s5">
              <input id="rlabelname" type="text" className="validate" />
              <label htmlFor="rlabelname">Label</label>
              <span className="helper-text" data-error="Mandatory Field" />
            </div>
            <div className="input-field col s5">
              <input id="rlabelvalue" type="text" className="validate" />
              <label htmlFor="rlabelvalue">Value</label>
              <span className="helper-text" data-error="Mandatory Field" />
            </div>
            <div className="input-field col s2">
              <a
                className="waves-effect waves-light btn"
                onClick={this.addItemToTable}
              >
                Add
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <b>List to label to be added</b>
          <table>
            <thead>
              <tr>
                <th>Label</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {this.state.options.map((obj, index) => (
                <tr key={obj.value + index}>
                  <td>{obj.label}</td>
                  <td>{obj.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row">
          <button className="waves-effect waves-light btn">Add to Form</button>
        </div>
      </form>
    );
  }
}
