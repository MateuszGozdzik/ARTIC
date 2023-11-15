import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { loadLikedItems } from '../utilities/Storage';
import ListItem from './ListItem';

const List = ({ data, loading, fetchData }) => {
  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    const loadLikedItemsAsync = async () => {
      const items = await loadLikedItems();
      setLikedItems(items);
    };

    loadLikedItemsAsync();
  }, []);

  return (
    <FlatList
      data={data}
      onEndReached={fetchData}
      onEndReachedThreshold={0.1}
      ListFooterComponent={loading && <ActivityIndicator />}
      renderItem={({ item }) => <ListItem itemData={item} />}
    />
  );
};

export default List;
