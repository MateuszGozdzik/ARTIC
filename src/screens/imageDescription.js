import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageDescription = (props) => {
  const [data, setData] = useState(null);
  const { itemId } = props;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artworks/${itemId}?fields=title,image_id,date_display,place_of_origin,artist_titles`
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
        <Image
          source={{
            uri: `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`
          }}
          style={styles.image}
        />
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.infoWrapper}>
          <Text style={{ color: 'white' }}>{data.place_of_origin}</Text>
          <Text style={{ color: 'white', textAlign: 'left' }}>
            {data.date_display}
          </Text>
          <Text style={{ color: 'white', textAlign: 'left' }}>
            {data.artist_titles}
          </Text>
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: 300,
    height: 500,
    flex: 4
  },
  title: { flex: 1, fontSize: 30, fontWeight: 'bold', color: 'white' },
  infoWrapper: {
    flex: 1,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});
export default ImageDescription;
