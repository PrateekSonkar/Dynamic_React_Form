const datasource = {
  classes: ["input-field", "col", "s12", "m6", "l3"],
  visibleform: "input",
  interimInput: {
    inputtype: "",
    type: "",
    key: "",
    fieldname: "",
    required: null
  },
  interimrest: {
    inputtype: "",
    checkboxname: "",
    options: []
  },

  form: {
    name: "abc",
    fields: []
  },
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
      checkboxname: "colors",
      options: [
        {
          key: "firstname2", // should be withoutspace
          fieldname: "color green",
          value: "green"
        },
        {
          key: "firstname1", // should be withoutspace
          fieldname: "color blue",
          value: "blue"
        },
        {
          key: "firstname", // should be withoutspace
          fieldname: "color red",
          value: "red"
        }
      ]
    },
    {
      inputtype: "radio",
      type: "radio",
      radioname: "rcolors",
      radioclasses: ["input-field", "col", "s12", "m3", "l3"],
      options: [
        {
          key: "firstname2", // should be withoutspace
          fieldname: "color green",
          value: "green"
        },
        {
          key: "firstname1", // should be withoutspace
          fieldname: "color blue",
          value: "blue"
        },
        {
          key: "firstname", // should be withoutspace
          fieldname: "color red",
          value: "red"
        }
      ]
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
