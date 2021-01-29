import styled from "styled-components";

import ItemContainer from "../Containers/Main";
import Container from "../Containers/Column";
import Icon from "../Icon";

const ListContainer = styled(Container)`
  align-items: flex-start;
  width: fit-content;
`;

const renderListItems = (items, icon, listName) =>
  items.map((item, index) => (
    <ItemContainer key={`LIST_ITEM_${listName}_#${index}`}>
      <Icon icon={icon} listIcon noBackground size="0.75" reverse />
      {item}
    </ItemContainer>
  ));

export default ({ icon, listItems, listName }) => (
  <ListContainer>{renderListItems(listItems, icon, listName)}</ListContainer>
);
