import { FlatList } from 'react-native';
import ListItem from '../components/ListItem';

const ItemList = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          imageUri={'https://reactnative.dev/img/tiny_logo.png'}
        />
      )}
    />
  );
};

export default ItemList;
