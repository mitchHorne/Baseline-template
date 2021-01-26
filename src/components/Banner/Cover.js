import styled from "styled-components";

import Container from "../Containers/Main";
import Header from "../Header/Main";

const Cover = styled(Container)`
  align-items: center;
  background-color: ${props => props.theme.colors.bannerBackground};
  color: ${props => props.theme.colors.banner};
  flex-direction: column;
  font-size: 2.5em;
  height: ${props => (props.fill ? "100vh" : "65vh")};
  justify-content: center;
  left: ${props => (props.left ? "0" : "10vw")};
  padding: 0 0.5em;
  position: absolute;
  text-align: center;
  width: 30vw;
`;

export default ({ left, fill, text }) => (
  <Cover fill={fill} left={left}>
    {text}
  </Cover>
);
