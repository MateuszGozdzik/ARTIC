import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import ListItem from './ListItem';

const List = ({ data, loading, fetchData }) => {
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
