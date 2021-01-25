import styled from "styled-components";
import { Field } from "react-final-form";
import { Checkbox } from "pretty-checkbox-react";

const StyledCheckbox = styled(Checkbox)`
  display: flex;
  width: fit-content;

  :hover {
    cursor: pointer;
  }
`;

export default ({ name, label }) => (
  <Field name={name} value={label} type="checkbox">
    {({ input }) => <StyledCheckbox {...input}>{label}</StyledCheckbox>}
  </Field>
);
