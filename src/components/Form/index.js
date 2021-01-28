import styled from "styled-components";
import { Form } from "react-final-form";

import Header from "../Header/Sub";
import Button from "../Button";

const StyledForm = styled.form`
  background-color: ${props => props.theme.colors.formBackground};
  border-radius: 10px;
  color: ${props => props.theme.colors.form};
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: 80%;

  ${props => props.theme.styling.formShadow}

  ${props => props.theme.media.desktop} {
    width: 50%;
  }

  ${props => props.theme.media.standard} {
    align-items: center;
    width: 30%;
  }
`;

const FormHeader = styled(Header)`
  color: ${props => props.theme.colors.formAccent};
`;

const StyledButton = styled(Button)`
  width: 20%;
`;

export default ({
  FormComponents,
  header,
  initialValues = {},
  onSubmit,
  validate = () => true,
}) => (
  <Form
    initialValues={initialValues}
    onSubmit={onSubmit}
    validate={validate}
    render={({ errors, handleSubmit, pristine, submitting, touched }) => (
      <StyledForm onSubmit={handleSubmit}>
        {header && <FormHeader>{header}</FormHeader>}
        <FormComponents errors={errors} touched={touched} />
        <StyledButton disabled={pristine || submitting} type="submit">
          Submit
        </StyledButton>
      </StyledForm>
    )}
  />
);
