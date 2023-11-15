import React from 'react';
import { FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import ListItem from './ListItem';

const List = ({ data, loading, fetchData, refreshing, onRefresh }) => {
  return (
    <FlatList
      data={data}
      onEndReached={fetchData}
      onEndReachedThreshold={0.1}
      ListFooterComponent={loading && <ActivityIndicator />}
      renderItem={({ item }) => <ListItem itemData={item} />}
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}
          colors={['#009688']} // Android
          tintColor={'#009688'} // iOS
        />
      }
    />
  );
};

export default List;
