import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageViewer from 'react-native-image-zoom-viewer';
import RenderHtml from 'react-native-render-html';
import LikedButton from '../components/LikedButton';

const ImageDescription = ({ route }) => {
  // Return Image Description, with Zooming image if flag is_zoomable, normal if not and no-image if there isn't image
  const { itemId } = route.params;
  const [data, setData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artworks/${itemId}?fields=title,image_id,date_display,place_of_origin,artist_titles,is_zoomable,description,id,artist_id`
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

    const Img = () => {
      if (data.is_zoomable) {
        return (
          <ImageViewer
            imageUrls={[{ url: imageUri }]}
            style={styles.image}
            renderIndicator={() => null}
          />
        );
      } else if (data.image_id) {
        return (
          <Image
            style={styles.image}
            source={{
              uri: `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`
            }}
          />
        );
      } else {
        return (
          <Image
            style={styles.image}
            source={require('../../assets/no-image.jpeg')}
          />
        );
      }
    };

    const Desc = () => {
      const { width } = useWindowDimensions();
      return data.description ? (
        <ScrollView style={styles.description}>
          <RenderHtml
            source={{ html: data.description }}
            contentWidth={width}
            baseStyle={styles.text}
          />
        </ScrollView>
      ) : null;
    };

    const handleArtistPress = () => {
      navigation.navigate('ArtistDescription', { artistId: data.artist_id });
    };

    if (data) {
      return (
        <View style={styles.container}>
          <Text style={[styles.text, styles.title]}>{data.title}</Text>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleArtistPress}>
              <Text style={[styles.text, styles.artist]}>
                {data.artist_titles}
              </Text>
            </TouchableOpacity>
            <LikedButton itemId={data.id} />
          </View>
          <Img />
          <Desc />
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator styles={styles.activityIndicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: 'black', flex: 1, paddingBottom: 50 },
  text: { color: 'white', textAlign: 'center' },
  image: { flex: 2 },
  title: { fontSize: 30, fontWeight: 'bold' },
  artist: { fontSize: 20, fontWeight: '300', textDecorationLine: 'underline' },
  activityIndicator: {
    alignSelf: 'center'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    flex: 1
  },
  description: {
    flex: 2,
    backgroundColor: '#1f1f1f',
    borderRadius: 30,
    marginTop: 10,
    paddingHorizontal: 5
  }
});

export default ImageDescription;
