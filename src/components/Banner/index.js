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

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

export default ({ fill, src }) => (
  <BannerContainer backgroundSrc={src} fill={fill}>
    <Cover fill={fill} text={text} />
  </BannerContainer>
);
