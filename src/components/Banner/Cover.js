import styled from "styled-components";

import Container from "../Containers/Main";
import Button from "../Button";

const Cover = styled(Container)`
  align-items: center;
  background-color: ${props => props.theme.colors.bannerBackground};
  color: ${props => props.theme.colors.banner};
  flex-direction: column;
  font-size: 1.5em;
  height: 100vh;
  justify-content: center;
  left: 0;
  padding: 0 0.5em;
  position: absolute;
  text-align: center;
  width: 50vw;

  ${props => props.theme.media.tablet} {
    font-size: 2.5em;
    height: ${props => (props.fill ? "100vh" : "65vh")};
    left: ${props => (props.left ? "0" : "15vw")};
    width: 25vw;
  }
`;

const CoberButtonContainer = styled(Container)`
  flex-direction: column;
  padding: 1em;
  padding-top: 2em;
  width: 100%;

  ${props => props.theme.media.tablet} {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const CoverButton = styled(Button)`
  background-color: ${props => props.theme.colors.bannerAccentBackground};
  color: ${props => props.theme.colors.bannerAccent};
  font-size: 0.75em;
  margin-bottom: 1em;
  min-width: 90%;

  ${props => props.theme.media.tablet} {
    font-size: 0.4em;
    min-width: 40%;
  }
`;

export default ({ left, fill, text }) => (
  <Cover fill={fill} left={left}>
    {text}
    <CoberButtonContainer>
      <CoverButton>Get Quote</CoverButton>
      <CoverButton>Get Other</CoverButton>
    </CoberButtonContainer>
  </Cover>
);
