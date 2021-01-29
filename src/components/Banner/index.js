import styled from "styled-components";

import Cover from "./Cover";

const BannerContainer = styled.div`
  background-clip: padding-box;
  background-image: url(${props => props.backgroundSrc});
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  position: relative;
  width: 100vw;

  ${props => props.theme.media.tablet} {
    height: ${props => (props.fill ? "100vh" : "65vh")};
  }
`;

export default ({ buttons, fill, left, src, text }) => (
  <BannerContainer backgroundSrc={src} fill={fill}>
    {(buttons || text) && (
      <Cover buttons={buttons} fill={fill} left={left} text={text} />
    )}
  </BannerContainer>
);
