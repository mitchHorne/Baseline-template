import styled from "styled-components";
import { Field } from "react-final-form";

import Container from "../../Container";
import FieldError from "./Error";

const FieldContainer = styled(Container)`
  flex-direction: column;
`;

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

export default ({ name, label }) => (
  <Field name={name}>
    {({ input, meta }) => {
      const hasError = meta.error && meta.touched;

      return (
        <FieldContainer>
          <label>{label}</label>
          <FieldInput
            {...input}
            error={hasError}
            placeholder={label}
            type="text"
          />
          {hasError && <FieldError>{meta.error}</FieldError>}
        </FieldContainer>
      );
    }}
  </Field>
);
