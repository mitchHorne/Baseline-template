import styled from "styled-components";
import { Form } from "react-final-form";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export default ({ FormComponents, onSubmit, validate = () => true }) => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit, submitting, pristine }) => (
      <StyledForm onSubmit={handleSubmit}>
        <FormComponents submitting={submitting} pristine={pristine} />
      </StyledForm>
    )}
  />
);
