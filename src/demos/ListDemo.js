import { ListItem, OrderedList, UnorderedList } from '@fremtind/jkl-list-react';

export const ListDemo = () => <>
  <UnorderedList>
    <ListItem>Listeelement 1</ListItem>
    <ListItem>
      Listeelement 2
      <UnorderedList>
        <ListItem>Nøstet listeelement</ListItem>
      </UnorderedList>
    </ListItem>
  </UnorderedList>

  <OrderedList>
    <ListItem>Nummerert listeelement 1</ListItem>
    <ListItem>
      Nummerert listeelement 2
      <OrderedList>
        <ListItem>Nøstet nummerert listeelement</ListItem>
      </OrderedList>
    </ListItem>
  </OrderedList>
</>;