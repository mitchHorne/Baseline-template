import styled from "styled-components";

import ItemContainer from "../Containers/Main";
import Container from "../Containers/Column";
import Icon from "../Icon";

const ListContainer = styled(Container)`
  align-items: flex-start;
  width: fit-content;
`;

const IconContainer = styled(ItemContainer)`
  align-items: center;
  padding-right: 0.5em;

  i {
    color: ${props => props.theme.colors.primaryAccent};
    font-size: 0.75em;
  }
`;

const renderListItems = (items, icon, listName) =>
  items.map((item, index) => (
    <ItemContainer key={`LIST_ITEM_${listName}_#${index}`}>
      <IconContainer>
        <Icon icon={icon}></Icon>
      </IconContainer>
      {item}
    </ItemContainer>
  ));

export default ({ icon, listItems, listName }) => (
  <ListContainer>{renderListItems(listItems, icon, listName)}</ListContainer>
);
