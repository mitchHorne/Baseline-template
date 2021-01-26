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
//   const checkboxOptions = [
//     { name: "sauces", label: "Ketchup" },
//     { name: "sauces", label: "Mustard" },
//     { name: "sauces", label: "BBQ" },
//     { name: "sauces", label: "Mayo" },
//   ];

//   return (
//     <Fragment>
//       <TextField name="name" label="Name" />
//       <TextField name="surname" label="Surname" />
//       <TextField name="price" label="Price" type="number" />
//       <SelectionGroup
//         error={errors.sauces}
//         options={checkboxOptions}
//         touched={touched.sauces}
//         type="checkbox"
//       />
//     </Fragment>
//   );
// };

// <Form
// FormComponents={FormComponents}
// onSubmit={values => console.log(values)}
// validate={validate}
// />
