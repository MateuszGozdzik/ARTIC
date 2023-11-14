import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LikedButton from './LikedButton';
import ImageDescription from '../screens/ImageDescription';

const handleItemPress = (itemId) => {
  return ImageDescription(itemId);
};
const ListItem = ({ itemData }) => (
  <TouchableOpacity onPress={handleItemPress}>
    <View style={styles.item}>
      {itemData.image_id ? (
        <Image
          style={styles.image}
          source={{
            uri: `https://www.artic.edu/iiif/2/${itemData.image_id}/full/843,/0/default.jpg`
          }}
        />
      ) : (
        <Image
          style={styles.image}
          source={require('../../assets/amongus.png')}
        />
      )}
      <Text style={styles.text}>{itemData.title}</Text>
      <LikedButton itemId={itemData.id} />
    </View>
  </TouchableOpacity>
);

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

export default ListItem;
