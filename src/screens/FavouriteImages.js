import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import List from '../components/List';
import { loadLikedItems } from '../utilities/Storage';

const FavImages = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (!loading)
      try {
        setLoading(true);
        const favImages = await loadLikedItems();
        imageIdsToFetch = favImages.slice((page - 1) * 15, page * 15);
        console.log(imageIdsToFetch);
        if (imageIdsToFetch.length === 0) {
          return;
        }
        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks?fields=title,api_link,image_id,id&ids=${imageIdsToFetch}`
        );
        const responseData = await response.json();
        const newData = responseData.data;

        if (page === 1) {
          setData(newData);
        } else {
          setData((prevData) => [...prevData, ...newData]);
        }

        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
  };

  if (data) {
    return (
      <View style={styles.container}>
        <List data={data} loading={loading} fetchData={fetchData} />
      </View>
    );
  }
};

styles = StyleSheet.create({
  container: { backgroundColor: 'black', flex: 1 }
});
export default FavImages;
