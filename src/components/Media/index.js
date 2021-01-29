import styled from "styled-components";

import Container from "../Containers/Main";
import Itemcontainer from "../Containers/Column";
import Icon from "../Icon";

const MediaContainer = styled(Container)`
  background: ${props => props.theme.colors.primaryBackground};
  flex-direction: column;
  padding: 1em 0 0;
  width: 100%;

  ${props => props.theme.media.desktop} {
    flex-direction: row;
    justify-content: center;
    padding: 4em 0;
  }
`;

const MediaItemContainer = styled(Itemcontainer)`
  margin-bottom: 2em;

  ${props => props.theme.media.desktop} {
    margin: 0 2em;
  }
`;

const Item = ({ brand, icon, text }) => (
  <MediaItemContainer>
    <Icon brand={brand} icon={icon} size="2" shadow />
    {text}
  </MediaItemContainer>
);

export default ({ city, email, facebook, instagram, mobile, twitter }) => (
  <MediaContainer>
    {mobile && <Item icon="phone-alt" text={mobile} />}
    {email && <Item icon="envelope" text={email} />}
    {city && <Item icon="map-marker-alt" text={city} />}
    {facebook && <Item brand icon="facebook-f" text="facebook" />}
    {twitter && <Item brand icon="twitter" text="twitter" />}
    {instagram && <Item brand icon="instagram" text="instagram" />}
  </MediaContainer>
);
