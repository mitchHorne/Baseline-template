import styled from "styled-components";
import { Field } from "react-final-form";

const RadioButton = styled.label`
  width: fit-content;

  input {
    margin-right: 0.25em;
  }

  :hover {
    cursor: pointer;
  }
`;

export default ({ name, label }) => (
  <Field name={name} value={label} type="radio">
    {({ input }) => (
      <RadioButton>
        <input type="radio" {...input} />
        {label}
      </RadioButton>
    )}
  </Field>
);
