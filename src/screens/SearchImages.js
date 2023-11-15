import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import List from '../components/List';

const SearchImages = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async () => {
    if (!loading)
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks/search?q=${searchQuery}&limit=15&page=${page}&fields=title,api_link,image_id,id`
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

  const handleSearch = (query) => {
    setData([]);
    setPage(1);
    setSearchQuery(query);
  };

  const handleRefresh = () => {
    if (refreshing) {
      return;
    }
    setRefreshing(true);
    setData([]);
    setPage(0);
    fetchData();
    setRefreshing(false);
  };

  if (data) {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for images"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <List
          data={data}
          loading={loading}
          fetchData={fetchData}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: { backgroundColor: 'black', flex: 1 },
  searchBar: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5
  }
});

export default SearchImages;
