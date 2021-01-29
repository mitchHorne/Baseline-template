import { Fragment } from "react";
import styled from "styled-components";

import Container from "../Containers/Column";
import SubHeader from "../Header/Minor";
import Icon from "../Icon";

const PointSection = styled(Container)`
  justify-content: center;
  width: 100vw;

  ${props => props.theme.media.desktop} {
    flex-direction: row;
    max-width: 1140px;
    ${props => (props.center ? "justify-content: space-around;" : "")}
  }

  ${props => props.theme.media.standard} {
    padding-bottom: 2em;
    max-width: 1440px;
  }
`;

const Point = styled(Container)`
  max-width: 80%;
  padding: 1em;

  p {
    margin: 0;
    text-align: center;
  }

  ${props => props.theme.media.tablet} {
    max-width: 20%;
  }
`;

const renderPoints = (points, groupIndex) =>
  points.map(({ header, icon, text }, index) => (
    <Point key={`ABOUT_POINT_GROUP_#${groupIndex}_POINT_#${index}`}>
      {icon && <Icon iconSize="2" shadow icon={icon} />}
      {header && <SubHeader>{header}</SubHeader>}
      <p>{text}</p>
    </Point>
  ));

const renderPointSectoins = pointSections =>
  pointSections.map((pointGroups, index) => (
    <PointSection key={`POINT_SECTION_${index}`}>
      {renderPoints(pointGroups, index)}
    </PointSection>
  ));

export default ({ points }) => (
  <Fragment>{renderPointSectoins(points.chunk(4))}</Fragment>
);
