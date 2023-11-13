import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import List from '../components/List';
import { loadLikedItems } from '../utilities/Storage';

const FavImages = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [usedIds, setUsedIds] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (!loading)
      try {
        setLoading(true);
        const favImageIds = await loadLikedItems();

        const newIds = usedIds
          ? favImageIds.filter((id) => !usedIds.includes(id))
          : favImageIds;
        const newIdsString = newIds.join(',');

        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks?limit=15&page=${page}&fields=title,api_link,image_id,id&ids=${newIdsString}`
        );
        const responseData = await response.json();
        const newData = responseData.data;
        const usedIds = newData.map((item) => item.id);

        if (page === 1) {
          setUsedIds(usedIds);
          setData(newData);
        } else {
          setUsedIds((prevUsedIds) => [...prevUsedIds, ...usedIds]);
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
