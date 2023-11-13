import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const ImageDescription = (props) => {
  const [data, setData] = useState(null);
  const { itemId } = props;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artworks/${itemId}?fields=title,image_id`
      );
      const responseData = await response.json();
      const newData = responseData.data;
      setData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (data) {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <ImageBackground
            source={{
              uri: `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`
            }}
            style={styles.image}
          >
            <Text style={styles.text}>{data.title}</Text>
          </ImageBackground>
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: { backgroundColor: 'black', flex: 1 },
  image: {
    width: 300,
    height: 500,
    justifyContent: 'flex-end'
  },
  text: {},
  wrapper: { flex: 1, alignItems: 'center' }
});
export default ImageDescription;
