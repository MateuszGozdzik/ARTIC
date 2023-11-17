import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ArtistDescription = ({ route }) => {
  // Return Image Description, with Zooming image if flag is_zoomable, normal if not and no-image if there isn't image
  const { artistId } = route.params;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      console.log(artistId);
      const response = await fetch(
        `https://api.artic.edu/api/v1/artists/${artistId}`
      );
      const responseData = await response.json();
      const newData = responseData.data;
      setData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (data) {
    console.log(data);
    return (
      <View style={styles.container}>
        <Text>{data.title}</Text>
        <Text>{`Birth: ${data.birth_date}  Death:${data.death_date}`}</Text>
        <Text>{data.description}</Text>
        <Text>{data.title}</Text>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({});

export default ArtistDescription;
