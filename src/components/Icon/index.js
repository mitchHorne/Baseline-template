import styled from "styled-components";

const IconContainer = styled.div`
  background-color: ${props =>
    props.noBackground
      ? "transparent"
      : props.reverse
      ? props.theme.colors.icon
      : props.theme.colors.iconBackground};
  border-radius: 100%;
  padding: 1em;

  ${props => (props.shadow ? props.theme.styling.iconShadow : null)}

  i {
    color: ${props =>
      props.reverse
        ? props.theme.colors.iconBackground
        : props.theme.colors.icon};
    font-size: ${props => props.iconSize}em;
  }
`;

export default ({
  brand,
  icon,
  iconSize = "1",
  noBackground,
  reverse,
  shadow,
}) => (
  <IconContainer
    iconSize={iconSize}
    noBackground={noBackground}
    reverse={reverse}
    shadow={shadow}>
    <i className={`fa${brand ? "b" : "s"} fa-fw fa-${icon}`} />
  </IconContainer>
);
