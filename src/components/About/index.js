import { Fragment } from "react";
import styled from "styled-components";

import Container from "../Containers/Main";
import Header from "../Header/Sub";
import SubHeader from "../Header/Minor";
import Icon from "../Icon";

const SectionContainer = styled(Container)`
  align-items: center;
  flex-direction: column;
`;

const SectionHeader = styled(Header)`
  color: ${props => props.theme.colors.primaryAccent};
`;

const PointSection = styled(Container)`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;

  ${props => props.theme.media.desktop} {
    flex-direction: row;
    max-width: 1140px;
    ${props => (props.center ? "justify-content: space-around;" : "")}
  }

  ${props => props.theme.media.standard} {
    max-width: 1440px;
  }
`;

const Point = styled(Container)`
  align-items: center;
  flex-direction: column;
  max-width: 20%;
  padding: 1em;

  p {
    margin: 0;
    text-align: center;
  }
`;

const PointIcon = styled.div`
  background-color: ${props => props.theme.colors.primaryAccentBackground};
  border-radius: 100%;
  padding: 0.5em;

  ${props => props.theme.styling.iconShadow}

  i {
    color: ${props => props.theme.colors.primaryAccent};
    font-size: 2em;
  }
`;

const points = [
  {
    header: "Lorem ipsum",
    icon: "robot",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    header: "Lorem ipsum",
    icon: "robot",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    header: "Lorem ipsum",
    icon: "robot",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    header: "Lorem ipsum",
    icon: "robot",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const renderPoints = points =>
  points.map(({ header, icon, text }, index) => (
    <Point key={`ABOUT_POINT_#${index}`}>
      {icon && (
        <PointIcon>
          <Icon icon={icon} />
        </PointIcon>
      )}
      {header && <SubHeader>{header}</SubHeader>}
      <p>{text}</p>
    </Point>
  ));

export default ({ Header }) => (
  <SectionContainer>
    <SectionHeader>{Header}</SectionHeader>
    <PointSection>{renderPoints(points)}</PointSection>
  </SectionContainer>
);
