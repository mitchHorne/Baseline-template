import { Fragment } from "react";
import styled from "styled-components";

import Container from "../Containers/Main";
import SubHeader from "../Header/Minor";
import Icon from "../Icon";

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
    padding-bottom: 2em;
    max-width: 1440px;
  }
`;

const Point = styled(Container)`
  align-items: center;
  flex-direction: column;
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

const renderPoints = (points, groupIndex) =>
  points.map(({ header, icon, text }, index) => (
    <Point key={`ABOUT_POINT_GROUP_#${groupIndex}_POINT_#${index}`}>
      {icon && (
        <PointIcon>
          <Icon icon={icon} />
        </PointIcon>
      )}
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
