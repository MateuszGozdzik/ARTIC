import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import List from '../components/List';

const ArtistDescription = ({ route }) => {
  const { artistId, artistTitle } = route.params;
  const { width } = useWindowDimensions();

  const [artistData, setArtistData] = useState(null);

  const [imageData, setImageData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchArtistData();
    fetchImageData();
  }, []);

  const fetchArtistData = async () => {
    try {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artists/${artistId}`
      );

      const responseData = await response.json();
      const newData = responseData.data;
      setArtistData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchImageData = async () => {
    if (!loading)
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks/search?page=${page}&q=${artistTitle}&fields=image_id,title`
        );
        const responseData = await response.json();
        const newData = responseData.data;

        if (page === 1) {
          setImageData(newData);
        } else {
          setImageData((prevData) => [...prevData, ...newData]);
        }
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
  };

  const Desc = () => {
    if (artistData.description) {
      return (
        <ScrollView styles={styles.description}>
          <RenderHtml
            source={{ html: artistData.description }}
            contentWidth={width}
            baseStyle={styles.text}
          />
        </ScrollView>
      );
    }
  };

  if (artistData && imageData) {
    const deathDate = artistData.birth_date
      ? artistData.death_date
        ? `${artistData.death_date}`
        : 'Still Alive'
      : 'Never Born';
    const birthDate = artistData.birth_date
      ? `${artistData.birth_date}`
      : 'Never Born';
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.title]}>{artistData.title}</Text>
        <Text style={[styles.text, styles.dates]}>
          {`Birth: ${birthDate}  Death: ${deathDate}`}
        </Text>
        <Desc />

        <List
          data={imageData}
          loading={loading}
          fetchData={fetchImageData}
          style={styles.list}
          touchable={false}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.activityIndicator} />
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
  },
  list: {
    marginTop: 20,
    flex: 2
  },
  description: { flex: 2 }
});

export default ArtistDescription;
