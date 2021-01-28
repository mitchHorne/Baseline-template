import styled from "styled-components";

export default styled.a`
  background: ${props =>
    props.disabled
      ? props.theme.colors.buttonDisabledBackground
      : props.theme.colors.buttonBackground};
  border: 0;
  border-radius: 10px;
  color: ${props => props.theme.colors.button};
  padding: 0.5em;
  text-decoration: none;

  :hover {
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  }

  :focus {
    outline: 0;
  }
`;
