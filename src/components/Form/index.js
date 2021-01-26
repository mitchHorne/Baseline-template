import styled from "styled-components";
import { Form } from "react-final-form";

import Button from "../Button";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export default ({ FormComponents, onSubmit, validate = () => true }) => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ errors, handleSubmit, pristine, submitting, touched }) => (
      <StyledForm onSubmit={handleSubmit}>
        <FormComponents errors={errors} touched={touched} />
        <Button disabled={pristine || submitting} type="submit">
          Submit
        </Button>
      </StyledForm>
    )}
  />
);
