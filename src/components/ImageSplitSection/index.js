import styled from "styled-components";

import Container from "../Containers/Main";
import ContentContainer from "../Containers/Column";

const SplitContainer = styled(Container)`
  flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
`;

const Content = styled(ContentContainer)`
  align-items: flex-start;
  background: ${props => props.theme.colors.formBackground};
  border-top: 1px solid ${props => props.theme.colors.formAccent};
  color: ${props => props.theme.colors.form};
  padding: 2em;
  padding-left: 5%;
  width: 100%;

  ${props => props.theme.media.tablet} {
    border: 0;
    width: 50%;
  }
`;

const Image = styled.img`
  display: none;

  ${props => props.theme.media.tablet} {
    display: block;
    width: 50%;
  }
`;

export const ContentHeader = styled.h1`
  color: ${props => props.theme.colors.formAccent};
`;

export default ({ imgSrc, PageContent, reverse }) => (
  <SplitContainer reverse={reverse}>
    <Content>
      <PageContent />
    </Content>
    <Image src={imgSrc} />
  </SplitContainer>
);
