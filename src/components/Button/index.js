import styled from "styled-components";

export default styled.button`
  background: ${props =>
    props.disabled
      ? props.theme.colors.buttonDisabledBackground
      : props.theme.colors.buttonBackground};
  border: 0;
  border-radius: 10px;
  color: ${props => props.theme.colors.button};
  padding: 0.5em;

  :hover {
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  }
`;
