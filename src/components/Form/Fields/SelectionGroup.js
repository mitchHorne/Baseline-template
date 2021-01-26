import styled from "styled-components";

import Container from "./Contaienr";
import Checkbox from "./Checkbox";
import Error from "./Error";

const StyledContainer = styled(Container)`
  padding-bottom: 0.5em;
`;

const renderOptions = (options, type) => {
  if (type === "checkbox")
    return options.map(({ name, label }, index) => (
      <Checkbox key={`CHECKBOX_#${index}`} label={label} name={name} />
    ));
};

export default ({ error, options, touched, type = "checkbox" }) => (
  <StyledContainer>
    {renderOptions(options, type)}
    {error && touched && <Error>{error}</Error>}
  </StyledContainer>
);
