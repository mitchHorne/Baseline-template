import styled from "styled-components";

import Container from "../Containers/Main";
import Header from "../Header/Sub";
import Points from "./Points";

const SectionContainer = styled(Container)`
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const SectionHeader = styled(Header)`
  color: ${props => props.theme.colors.primaryAccent};
`;

export default ({ header, points }) => (
  <SectionContainer>
    <SectionHeader>{header}</SectionHeader>
    <Points points={points} />
  </SectionContainer>
);
