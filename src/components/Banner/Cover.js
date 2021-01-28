import styled from "styled-components";

import Container from "../Containers/Column";
import Link from "../Button/Link";

const Cover = styled(Container)`
  background-color: ${props => props.theme.colors.bannerBackground};
  color: ${props => props.theme.colors.banner};
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

const CoverButtonContainer = styled(Container)`
  padding: 1em;
  padding-top: 2em;
  width: 100%;

  ${props => props.theme.media.tablet} {
    flex-direction: ${props => (props.length > 2 ? "column" : "row")};
    justify-content: space-around;
  }
`;

const CoverButton = styled(Link)`
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

const renderButtons = buttons =>
  buttons.map(({ href, text }, index) => (
    <CoverButton key={`COVER_BUTTON_#${index}`} href={href}>
      {text}
    </CoverButton>
  ));

export default ({ buttons, left, fill, text }) => (
  <Cover fill={fill} left={left}>
    {text}
    {buttons?.length && (
      <CoverButtonContainer length={buttons.length}>
        {renderButtons(buttons)}
      </CoverButtonContainer>
    )}
  </Cover>
);
