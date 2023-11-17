import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import RenderHtml from 'react-native-render-html';

const ArtistDescription = ({ route }) => {
  const { artistId } = route.params;
  const [data, setData] = useState(null);
  const [img, setImg] = useState(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artists/${artistId}`
      );

      const responseData = await response.json();
      const newData = responseData.data;
      setData(newData);

      const responseImg = await fetch(
        `https://api.artic.edu/api/v1/artworks/search?limit=1&q=${newData.title}&fields=image_id`
      );
      const responseImgData = await responseImg.json();
      const newImgData = responseImgData.data;
      setImg(newImgData[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const Desc = () => {
    if (data.description) {
      return (
        <ScrollView>
          <RenderHtml
            source={{ html: data.description }}
            contentWidth={width}
            baseStyle={styles.text}
          />
        </ScrollView>
      );
    }
  };

  if (data && img) {
    const deathDate = data.birth_date
      ? data.death_date
        ? `${data.death_date}`
        : 'Still Alive'
      : 'Never Born';
    const birthDate = data.birth_date ? `${data.birth_date}` : 'Never Born';
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.title]}>{data.title}</Text>
        <Text style={[styles.text, styles.dates]}>
          {`Birth: ${birthDate}  Death: ${deathDate}`}
        </Text>
        <Desc />
        <Image
          style={styles.image}
          source={{
            uri: `https://www.artic.edu/iiif/2/${img.image_id}/full/843,/0/default.jpg`
          }}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator styles={styles.activityIndicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: 'black', flex: 1, paddingTop: 30 },
  text: { color: 'white', textAlign: 'center' },
  image: { width: '90%', height: 500, alignSelf: 'center' },
  title: { fontSize: 40, fontWeight: 'bold' },
  dates: { fontSize: 20, fontWeight: '300' },
  activityIndicator: {
    alignSelf: 'center'
  }
});

export default ArtistDescription;
