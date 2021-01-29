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
    flex-direction: inherit;
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

const IconContainer = styled.div`
  background-color: ${props => props.theme.colors.buttonBackground};
  border-radius: 100%;
  margin-bottom: 1em;
  padding: 1em;

  ${props => props.theme.styling.iconShadow}

  i {
    color: ${props => props.theme.colors.button};
    font-size: 2em;
  }
`;

const Item = ({ brand, icon, text }) => (
  <MediaItemContainer>
    <IconContainer>
      <Icon brand={brand} icon={icon} />
    </IconContainer>
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
