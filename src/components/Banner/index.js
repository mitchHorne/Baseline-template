import styled from "styled-components";

const BannerContainer = styled.div`
  background-clip: padding-box;
  background-image: url(${props => props.backgroundSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 4em);
  padding: 2em;
  width: 100%;
`;

export default ({ src }) => <BannerContainer backgroundSrc={src} />;
