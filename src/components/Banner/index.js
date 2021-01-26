import styled from "styled-components";

import Cover from "./Cover";

const BannerContainer = styled.div`
  background-clip: padding-box;
  background-image: url(${props => props.backgroundSrc});
  background-position: center;
  background-repeat: no-repeat;
  height: ${props => (props.fill ? "100vh" : "65vh")};
  position: relative;
`;

export default ({ fill, left, src, text }) => (
  <BannerContainer backgroundSrc={src} fill={fill}>
    {text && <Cover fill={fill} left={left} text={text} />}
  </BannerContainer>
);
