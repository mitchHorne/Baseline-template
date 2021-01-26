import { Fragment } from "react";

import Form from "../components/Form";
import SelectionGroup from "../components/Form/Fields/SelectionGroup";
import TextField from "../components/Form/Fields/TextField";

const validate = values => {
  const errors = {};
  if (!values.name) errors.name = "Required";
  if (!values.surname) errors.surname = "Required";
  if (!values.price) errors.price = "Required";
  if (!values.sauces?.length) errors.sauces = "Select at least 1";

  return errors;
};

const initialValues = {
  name: "mitch",
  surname: "",
  price: "1250",
  sauces: [],
  delivery: "At door",
};

const FormComponents = ({ errors, touched }) => {
  const checkboxOptions = [
    { name: "sauces", label: "Ketchup" },
    { name: "sauces", label: "Mustard" },
    { name: "sauces", label: "BBQ" },
    { name: "sauces", label: "Mayo" },
  ];

  const radioOptions = [
    { name: "delivery", label: "At door" },
    { name: "delivery", label: "At gate" },
    { name: "delivery", label: "Pick up" },
  ];

  return (
    <Fragment>
      <TextField name="name" label="Name" />
      <TextField name="surname" label="Surname" />
      <TextField name="price" label="Price" type="number" />
      <SelectionGroup
        error={errors.sauces}
        options={checkboxOptions}
        touched={touched.sauces}
        type="checkbox"
      />
      <SelectionGroup
        error={errors.delivery}
        options={radioOptions}
        touched={touched.delivery}
        type="radio"
      />
    </Fragment>
  );
};

const Main = () => (
  <Fragment>
    <h1>things</h1>
    <Form
      FormComponents={FormComponents}
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
      validate={validate}
    />
  </Fragment>
);

export default Main;
