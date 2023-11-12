import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import List from '../components/List';

const AllImages = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch initial data
    fetchData();
  }, []);

  const fetchData = async () => {
    if (!loading)
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks?limit=15&page=${page}&fields=title,api_link,image_id,id`
        );
        const responseData = await response.json();
        const newData = responseData.data;
        setData((prevData) => {
          if (prevData) {
            return [...prevData, ...newData];
          } else {
            return [...newData];
          }
        });
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
export default AllImages;
