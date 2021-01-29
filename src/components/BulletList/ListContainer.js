import styled from "styled-components";

import Container from "../Containers/Main";

export default styled(Container)`
  flex-direction: column;

  ${props => props.theme.media.tablet} {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
`;
