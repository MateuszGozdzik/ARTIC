import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const List = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image
            style={styles.image}
            source={{
              uri: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`
            }}
          />
          <Text style={styles.text}>{item.title}</Text>
          <AntDesign name="hearto" size={24} color="red" />
        </View>
      )}
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
  image: { width: 50, height: 50 },
  text: { maxWidth: 200 }
});

export default List;
