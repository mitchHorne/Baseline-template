import styled from "styled-components";

import Container from "./Container";
import Checkbox from "./Checkbox";
import RadioButton from "./RadioButton";
import Error from "./Error";

const StyledContainer = styled(Container)`
  align-items: flex-start;
  padding-bottom: 0.5em;
  padding-left: 10%;
  width: fit-content;

  ${props => props.theme.media.desktop} {
    padding-left: 0;
  }
`;

const renderOptions = (options, type) => {
  if (type === "checkbox")
    return options.map(({ name, label }, index) => (
      <Checkbox key={`CHECKBOX_${name}_#${index}`} label={label} name={name} />
    ));

  return options.map(({ name, label }, index) => (
    <RadioButton key={`RADIO_${name}_#${index}`} label={label} name={name} />
  ));
};

export default ({ error, options, touched, type = "checkbox" }) => (
  <StyledContainer>
    {renderOptions(options, type)}
    {error && touched && <Error>{error}</Error>}
  </StyledContainer>
);
