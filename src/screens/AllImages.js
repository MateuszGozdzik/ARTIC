import React from 'react';
import { View, StyleSheet } from 'react-native';
import List from '../components/List';
import { useGetImages } from '../hooks/useGetImages';

const AllImages = () => {
  const data = useGetImages();
  if (data) {
    images = data.data;
    console.log(images);
    return (
      <View style={styles.container}>
        <List data={images} />
      </View>
    );
  }
};

styles = StyleSheet.create({
  container: { backgroundColor: 'black', flex: 1 }
});
export default AllImages;
