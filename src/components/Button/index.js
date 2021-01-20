import styled from "styled-components";

export default styled.button`
  background: ${props => props.theme.colors.accentBackground};
  border: 0;
  color: ${props => props.theme.colors.accent};
  padding: 0.5em;

  :hover {
    cursor: pointer;
  }
`;
