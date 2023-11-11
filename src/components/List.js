import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator
} from 'react-native';
import LikedButton from './LikedButton';

const List = ({ data, loading, fetchData }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={{
          uri: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`
        }}
      />
      <Text style={styles.text}>{item.title}</Text>
      <LikedButton itemId={item.image_id} />
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.image_id}
      onEndReached={fetchData}
      onEndReachedThreshold={0.1}
      ListFooterComponent={loading && <ActivityIndicator />}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'grey',
    padding: 5,
    paddingHorizontal: 20,
    margin: 3,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: { width: 50, height: 50, borderRadius: 10 },
  text: { maxWidth: 200, textAlign: 'center' }
});

export default List;
