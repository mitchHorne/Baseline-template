import { useState } from "react";
import styled from "styled-components";

import Container from "../Container";
import Icon from "../Icon";
import logoSrc from "../../constants/logo.png";

const Navbar = styled(Container)`
  align-items: center;
  box-shadow: 1px 1px 15px #333;
  left: 0;
  padding: 0 1em;
  position: fixed;
  top: 0;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const MobileNavToggle = styled.button`
  background: transparent;
  border: 0;
  font-size: 1.5em;
  position: absolute;

  :focus {
    outline: none;
  }

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

const Logo = styled.img`
  display: block;
  height: 45px;
  margin: auto;
  width: 110px;

  @media only screen and (min-width: 1024px) {
    margin: inherit;
  }
`;

const DesktopLinkContainer = styled(Container)`
  align-items: center;
  display: none;
  justify-content: flex-start;

  @media only screen and (min-width: 1024px) {
    display: inherit;
  }
`;

const MobileLinkContainer = styled(Container)`
  background: ${props => props.theme.colors.primaryBackground};
  flex-direction: column;
  height: calc(100vh - 45px);
  position: fixed;
  transition: 0.3s left;
  top: 45px;
  width: 100%;

  ${props => (props.isOpen ? "left: 0;" : "left: -100%;")}

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

const Link = styled.a`
  color: ${props => props.theme.colors.primary};
  padding: 1em 0.5em;
  text-decoration: none;

  :hover {
    background: ${props => props.theme.colors.accentBackground};
    color: ${props => props.theme.colors.accent};
  }
`;

const renderLinks = () => {
  const links = [
    { anchor: "#", text: "Link 1" },
    { anchor: "#", text: "Link 2" },
    { anchor: "#", text: "Link 3" },
  ];

  return links.map(({ anchor, text }) => <Link href={anchor}>{text}</Link>);
};

export default () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Navbar>
      <MobileNavToggle onClick={() => setOpen(!isOpen)}>
        <Icon icon={isOpen ? "times" : "bars"} />
      </MobileNavToggle>
      <Logo src={logoSrc} />
      <DesktopLinkContainer>{renderLinks()}</DesktopLinkContainer>
      <MobileLinkContainer isOpen={isOpen}>{renderLinks()}</MobileLinkContainer>
    </Navbar>
  );
};