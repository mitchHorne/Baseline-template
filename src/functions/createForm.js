// Example of creating a form

// const validate = values => {
//   const errors = {};
//   if (!values.name) errors.name = "Required";
//   if (!values.surname) errors.surname = "Required";
//   if (!values.price) errors.price = "Required";
//   if (!values.sauces?.length) errors.sauces = "Select at least 1";

//   return errors;
// };

// const FormComponents = ({ errors, touched }) => {
//     const checkboxOptions = [
//       { name: "sauces", label: "Ketchup" },
//       { name: "sauces", label: "Mustard" },
//       { name: "sauces", label: "BBQ" },
//       { name: "sauces", label: "Mayo" },
//     ];

//     const radioOptions = [
//       { name: "delivery", label: "At door" },
//       { name: "delivery", label: "At gate" },
//       { name: "delivery", label: "Pick up" },
//     ];

//     return (
//       <Fragment>
//         <TextField name="name" label="Name" />
//         <TextField name="surname" label="Surname" />
//         <TextField name="price" label="Price" type="number" />
//         <SelectionGroup
//           error={errors.sauces}
//           options={checkboxOptions}
//           touched={touched.sauces}
//           type="checkbox"
//         />
//         <SelectionGroup
//           error={errors.delivery}
//           options={radioOptions}
//           touched={touched.delivery}
//           type="radio"
//         />
//       </Fragment>
//     );
//   };

// <Form
// FormComponents={FormComponents}
// onSubmit={values => console.log(values)}
// validate={validate}
// />
