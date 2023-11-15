import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const ImageDescription = ({ route }) => {
  const { itemId } = route.params;
  const [data, setData] = useState(null);

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
    const imageUri = `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`;

    return (
      <View style={styles.container}>
        <ImageViewer
          imageUrls={[{ url: imageUri }]}
          renderHeader={() => <Text style={styles.title}>{data.title}</Text>}
          style={styles.imageViewer}
          renderIndicator={() => null}
        />
        <Text style={{ color: 'white', fontSize: 18 }}>
          {data.place_of_origin}
        </Text>
        <Text style={{ color: 'white', textAlign: 'left', fontSize: 16 }}>
          {data.date_display}
        </Text>
        <Text style={{ color: 'white', textAlign: 'left', fontSize: 16 }}>
          {data.artist_titles}
        </Text>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  title: {
    fontSize: 16,
    fontWeight: '900',
    color: 'white',
    textAlign: 'center',
    paddingTop: 20
  },
  imageViewer: {
    height: 'auto',
    flex: 2
  }
});

export default ImageDescription;
