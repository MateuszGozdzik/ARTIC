import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity
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
            renderHeader={() => <Text style={styles.title}>{data.title}</Text>}
            style={styles.image}
            renderIndicator={() => null}
          />
        );
      } else if (data.image_id) {
        return (
          <View style={styles.image}>
            <Text style={styles.title}>{data.title}</Text>
            <Image
              style={{ width: '100%', height: 500 }}
              source={{
                uri: `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`
              }}
            />
          </View>
        );
      } else {
        return (
          <View style={styles.image}>
            <Text style={styles.title}>{data.title}</Text>
            <Image
              style={{ width: '100%', height: 300 }}
              source={require('../../assets/no-image.jpeg')}
            />
          </View>
        );
      }
    };

    const Description = () => {
      const { width } = useWindowDimensions();
      return data.description ? (
        <ScrollView style={{ flex: 1 }}>
          <RenderHtml
            source={{ html: data.description }}
            contentWidth={width}
            baseStyle={styles.html}
          />
        </ScrollView>
      ) : null;
    };

    const handleArtistPress = () => {
      navigation.navigate('ArtistDescription', { artistId: data.artist_id });
    };

    return (
      <View style={styles.container}>
        <Img />
        <View style={styles.descWrapper}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={handleArtistPress}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'left',
                  fontSize: 16,
                  fontWeight: 'bold'
                }}
              >
                {data.artist_titles}
              </Text>
            </TouchableOpacity>
            <LikedButton itemId={data.id} />
          </View>
          <Text style={{ color: 'white', fontSize: 18 }}>
            {data.place_of_origin}
          </Text>
          <Text style={{ color: 'white', textAlign: 'left', fontSize: 16 }}>
            {data.date_display}
          </Text>
        </View>
        <Description />
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    paddingBottom: 20
  },
  title: {
    fontSize: 18,
    fontWeight: '900',
    color: 'white',
    textAlign: 'center',
    paddingTop: 20
  },
  image: {
    flex: 2
  },
  html: {
    color: 'white'
  }
});

export default ImageDescription;
