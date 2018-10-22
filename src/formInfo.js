import React from "react";

const formInfo = props => {
  return (
    <div className="container">
      <div className="row">
        <b> Details of fields in form</b>
      </div>
      <div className="row">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Input Type</th>
              <th>Options</th>
            </tr>
          </thead>

          <tbody>
            {props.formfields.map((field, index) => (
              <tr key={field.key + index}>
                <td>{field.labelname}</td>
                <td>{field.type}</td>
                <td>
                  {field.inputtype != "input" ? field.options.length : "Nil"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {props.formfields.length > 0 ? (
        <div className="row">
          <a
            className="waves-effect waves-light btn"
            onClick={props.createForm}
          >
            Create Form
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default formInfo;
