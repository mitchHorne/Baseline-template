import styled from "styled-components";
import { Field } from "react-final-form";

import Container from "./Contaienr";
import Error from "./Error";

const FieldInput = styled.input`
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
  padding: 0.25em;
  transition: 0.3s all;
  width: 10em;

  ${props => (props.error ? `border-color: ${props.theme.colors.error};` : "")}

  :focus {
    outline: 0;

    ${props =>
      props.error
        ? `border-color: ${props.theme.colors.error}; box-shadow: 0 0 5px ${props.theme.colors.error};`
        : `box-shadow: 0 0 5px ${props.theme.colors.primary};`}
  }
`;

export default ({ name, label, type = "text" }) => (
  <Field name={name}>
    {({ input, meta }) => {
      const hasError = meta.error && meta.touched;

      return (
        <Container>
          <label>{label}</label>
          <FieldInput
            {...input}
            error={hasError}
            placeholder={label}
            type={type}
          />
          {hasError && <Error>{meta.error}</Error>}
        </Container>
      );
    }}
  </Field>
);
