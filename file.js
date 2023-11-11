import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch initial data
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      console.log(page);
      const response = await fetch(
        `https://api.artic.edu/api/v1/artworks?page=${page}&limit=90`
      );
      console.log(response);
      const responseData = await response.json();
      const newData = responseData.data || [];

      setData((prevData) => {
        if (prevData) {
          return [...prevData, ...newData];
        } else {
          // Handle the case when prevData is not available (e.g., initial state)
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
};
