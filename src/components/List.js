import { FlatList } from 'react-native';
import ListItem from '../components/ListItem';

const ItemList = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          imageUri={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
        />
      )}
    />
  );
};

export default ItemList;
