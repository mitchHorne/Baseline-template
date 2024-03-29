import { useState } from "react";
import styled from "styled-components";

import Container from "../Containers/Main";
import ColumnContainer from "../Containers/Column";
import Icon from "../Icon";
import logoSrc from "../../constants/logo.png";

const Navbar = styled(Container)`
  align-items: center;
  background: ${props => props.theme.colors.navBackground};
  color: ${props => props.theme.colors.nav};
  width: 100%;
  z-index: 999;

  ${props =>
    props.fixed
      ? `left: 0;position: fixed;top: 0;${props.theme.styling.boxShadow}`
      : ""}

  ${props => props.theme.media.tablet} {
    justify-content: center;
  }
`;

const MobileNavToggle = styled.button`
  background: transparent;
  border: 0;
  font-size: 1.5em;
  position: absolute;

  ${props => (props.right ? "right: 0;" : "")}

  :focus {
    outline: none;
  }

  ${props => props.theme.media.tablet} {
    display: none;
  }
`;

const DesktopContent = styled(Container)`
  align-items: center;
  width: 100%;

  ${props => props.theme.media.desktop} {
    max-width: 1140px;
    ${props => (props.center ? "justify-content: space-around;" : "")}
  }

  ${props => props.theme.media.standard} {
    max-width: 1440px;
  }
`;

const Logo = styled.img`
  display: block;
  height: 45px;
  margin: auto;
  width: 110px;

  ${props => props.theme.media.tablet} {
    margin: inherit;
  }
`;

const DesktopLinkContainer = styled(Container)`
  align-items: center;
  display: none;
  justify-content: flex-start;

  ${props => props.theme.media.tablet} {
    display: inherit;
  }
`;

const MobileLinkContainer = styled(ColumnContainer)`
  background: ${props => props.theme.colors.navBackground};
  height: auto;
  position: fixed;
  transition: 0.3s all;
  top: 45px;
  width: 100%;

  ${props =>
    props.isOpen
      ? props.right
        ? "right: 0;"
        : "left: 0;"
      : props.right
      ? "right: -100%;"
      : "left: -100%;"}

  ${props => props.theme.media.tablet} {
    display: none;
  }
`;

const Link = styled.a`
  color: ${props => props.theme.colors.nav};
  padding: 1em 0.5em;
  text-decoration: none;

  :hover {
    color: ${props => props.theme.colors.navAccent};
  }
`;

const renderLinks = links =>
  links.map(({ anchor, text }) => (
    <Link href={anchor} key={`NAV_LINK_${text}`}>
      {text}
    </Link>
  ));

export default ({ center, fixed, right }) => {
  const [isOpen, setOpen] = useState(false);

  const links = [
    { anchor: "#", text: "Link 1" },
    { anchor: "#", text: "Link 2" },
    { anchor: "#", text: "Link 3" },
  ];

  return (
    <Navbar fixed={fixed}>
      <MobileNavToggle onClick={() => setOpen(!isOpen)} right={right}>
        <Icon icon={isOpen ? "times" : "bars"} noBackground />
      </MobileNavToggle>
      <DesktopContent center={center}>
        <a href="/">
          <Logo src={logoSrc} />
        </a>
        <DesktopLinkContainer>{renderLinks(links)}</DesktopLinkContainer>
      </DesktopContent>
      <MobileLinkContainer fixed={fixed} isOpen={isOpen} right={right}>
        {renderLinks(links)}
      </MobileLinkContainer>
    </Navbar>
  );
};
