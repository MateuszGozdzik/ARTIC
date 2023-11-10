import React from 'react';
import { View, StyleSheet } from 'react-native';
import ItemList from '../components/List';
import { useGetImages } from '../hooks/useGetImages';

const AllImages = () => {
  const data = useGetImages();
  if (data) {
    images = data.data;
    console.log(images);
    return (
      <View style={styles.container}>
        <ItemList data={images} />
      </View>
    );
  }
};

styles = StyleSheet.create({
  container: { backgroundColor: 'black', flex: 1 }
});
export default AllImages;
