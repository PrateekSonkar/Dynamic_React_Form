const datasource = {
  classes: ["input-field", "col", "s12", "m6", "l3"],
  formfields: [
    {
      inputtype: "input",
      type: "text",
      key: "firstname", // should be withoutspace
      fieldname: "First Name",
      required: true
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
      selectname: "abc",
      options: [
        { value: "abc", fieldname: "No thing" },
        { value: "abc1", fieldname: "No thing 1" },
        { value: "abc2", fieldname: "No thing 2" }
      ]
    }
  ]
};

export default datasource;
