import styled from "styled-components";
import { Field } from "react-final-form";

import Container from "./Contaienr";
import Error from "./Error";

const FieldInput = styled.input`
  border: 0;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  margin-top: 0.5em;
  padding: 0.25em;
  transition: 0.3s all;
  width: 10em;

  ${props => (props.error ? `border-color: ${props.theme.colors.error};` : "")}

  :focus {
    outline: 0;

    ${props =>
      props.error ? `border-color: ${props.theme.colors.error}; ` : ""}
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
