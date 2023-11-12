import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import List from '../components/List';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LikedImages = () => {
  const [likedData, setLikedData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch initial liked data
    fetchLikedData();
  }, []);

  const fetchLikedData = async () => {
    if (!loading) {
      try {
        setLoading(true);
        const likedDataFromStorage = await fetchLikedDataFromStorage();
        setLikedData(likedDataFromStorage);
      } catch (error) {
        console.error('Error fetching liked data:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const fetchLikedDataFromStorage = async () => {
    try {
      const storedLikedItems = await AsyncStorage.getItem('likedItems');
      if (storedLikedItems) {
        return JSON.parse(storedLikedItems);
      }
      return [];
    } catch (error) {
      console.error('Error loading liked items:', error);
      return [];
    }
  };

  if (likedData) {
    return (
      <View style={styles.container}>
        <List data={likedData} loading={loading} fetchData={fetchLikedData} />
      </View>
    );
  }

  // Return null or any default component if likedData is not available yet
  return null;
};

const styles = StyleSheet.create({
  container: { backgroundColor: 'black', flex: 1 }
});

export default LikedImages;

// ! Doesnt Work
