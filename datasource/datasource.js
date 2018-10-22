// const datasource = {
//   classes: ["input-field", "col", "s12", "m6", "l3"],
//   visibleform: "input",
//   interimInput: {
//     inputtype: "",
//     type: "",
//     key: "",
//     fieldname: "",
//     required: null
//   },
//   interimrest: {
//     inputtype: "",
//     checkboxname: "",
//     options: []
//   },

//   form: {
//     name: "abc",
//     fields: []
//   },
//   formfields: [
//     {
//       inputtype: "input",
//       type: "text",
//       key: "firstname", // should be withoutspace
//       fieldname: "First Name",
//       required: true
//     },
//     {
//       inputtype: "input",
//       type: "text",
//       key: "lastname", // should be withoutspace
//       fieldname: "Last Name"
//     },
//     {
//       inputtype: "input",
//       type: "text",
//       key: "eduqual", // should be withoutspace
//       fieldname: "Qualification"
//     },
//     {
//       inputtype: "checkbox",
//       checkboxname: "colors",
//       options: [
//         {
//           key: "firstname2", // should be withoutspace
//           fieldname: "color green",
//           value: "green"
//         },
//         {
//           key: "firstname1", // should be withoutspace
//           fieldname: "color blue",
//           value: "blue"
//         },
//         {
//           key: "firstname", // should be withoutspace
//           fieldname: "color red",
//           value: "red"
//         }
//       ]
//     },
//     {
//       inputtype: "radio",
//       type: "radio",
//       radioname: "rcolors",
//       radioclasses: ["input-field", "col", "s12", "m3", "l3"],
//       options: [
//         {
//           key: "firstname2", // should be withoutspace
//           fieldname: "color green",
//           value: "green"
//         },
//         {
//           key: "firstname1", // should be withoutspace
//           fieldname: "color blue",
//           value: "blue"
//         },
//         {
//           key: "firstname", // should be withoutspace
//           fieldname: "color red",
//           value: "red"
//         }
//       ]
//     },
//     {
//       inputtype: "select",
//       ukey: "firstname", // should be withoutspace
//       selectname: "abc",
//       options: [
//         { value: "abc", fieldname: "No thing" },
//         { value: "abc1", fieldname: "No thing 1" },
//         { value: "abc2", fieldname: "No thing 2" }
//       ]
//     }
//   ]
// };

const datasource = {
  classes: ["input-field", "col", "s12", "m6", "l3"],
  formname: "registration",
  collectionname: "registration",
  formfields: [
    {
      labelname: "Name",
      name: "Name",
      defaultvalue: null,
      required: true,
      customerrmsg: null,
      key: "Name",
      id: "H48kEmlbM",
      type: "text",
      inputtype: "input"
    },
    {
      labelname: "Email",
      name: "Email",
      defaultvalue: null,
      required: false,
      customerrmsg: null,
      key: "Email",
      id: "mgJKX7z4E",
      type: "text",
      inputtype: "input"
    },
    {
      labelname: "Mobile",
      name: "Mobile",
      defaultvalue: null,
      required: false,
      customerrmsg: null,
      key: "Mobile",
      id: "gsqMnMLNS",
      type: "number",
      inputtype: "input"
    },
    {
      labelname: "Gender",
      name: "Gender",
      key: "Gender",
      id: "bTCckrckl",
      type: "radio",
      inputtype: "radio",
      options: [
        {
          label: "Male",
          value: "male"
        },
        {
          label: "Female",
          value: "female"
        }
      ]
    },
    {
      labelname: "Preeferences",
      name: "Preeferences",
      key: "Preeferences",
      id: "r-SFp4aiX",
      type: "checkbox",
      inputtype: "checkbox",
      options: [
        {
          label: "Food",
          value: "food"
        },
        {
          label: "Drinks",
          value: "drinks"
        },
        {
          label: "Travel",
          value: "travel"
        }
      ]
    },
    {
      labelname: "Country",
      name: "Country",
      key: "Country",
      id: "PKx4gdk4Q",
      type: "select",
      inputtype: "select",
      options: [
        {
          label: "India",
          value: "IN"
        },
        {
          label: "Australia",
          value: "AU"
        },
        {
          label: "Germany",
          value: "DE"
        }
      ]
    }
  ],
  visibleform: "select"
};

export default datasource;
