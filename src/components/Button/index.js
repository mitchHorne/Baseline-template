import styled from "styled-components";

export default styled.button`
  background: ${props => props.theme.colors.buttonBackground};
  border: 0;
  color: ${props => props.theme.colors.button};
  padding: 0.5em;

  :hover {
    cursor: pointer;
  }
`;
