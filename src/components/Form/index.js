import styled from "styled-components";
import { Form } from "react-final-form";

import Header from "../Header/Sub";
import Button from "../Button";

export const formTypeForm = "FORMTYPE/FORM";
export const formTypePage = "FORMTYPE/PAGE";
export const formTypeSection = "FORMTYPE/SECTION";

const StyledForm = styled.form`
  background-color: ${props => props.theme.colors.formBackground};
  border-radius: ${props => (props.formType === formTypeForm ? "10px" : "0")};
  color: ${props => props.theme.colors.form};
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  padding: 1em;
  width: 100vw;

  ${props => props.theme.media.desktop} {
    width: ${props => (props.formType === formTypeSection ? "100vw" : "50vw")};
    ${props =>
      props.formType === formTypeForm ? props.theme.styling.formShadow : null}
  }

  ${props => props.theme.media.standard} {
    align-items: center;
    width: ${props => (props.formType === formTypeSection ? "100vw" : "30vw")};
  }
`;

export const formContinuation = styled.div`
  background-color: ${props => props.theme.colors.formBackground};
  border-radius: 10px;
  color: ${props => props.theme.colors.form};
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: 80%;

  ${props => props.theme.media.desktop} {
    width: 50%;

    ${props => props.theme.styling.formShadow}
  }

  ${props => props.theme.media.standard} {
    align-items: center;
    width: 30%;
  }
`;

const FormHeader = styled(Header)`
  align-self: center;
  color: ${props => props.theme.colors.formAccent};
`;

const SubmitButton = styled(Button)`
  align-self: center;
  margin-top: 1em;
  width: 80%;

  ${props => props.theme.media.desktop} {
    width: ${props => (props.formType === formTypeSection ? "10%" : "20%")};
  }
`;

export default ({
  FormComponents,
  formType = formTypeForm,
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
      <StyledForm formType={formType} onSubmit={handleSubmit}>
        {header && <FormHeader>{header}</FormHeader>}
        <FormComponents errors={errors} touched={touched} />
        <SubmitButton
          disabled={pristine || submitting}
          formType={formType}
          type="submit">
          Submit
        </SubmitButton>
      </StyledForm>
    )}
  />
);
