import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';

const LikedButton = ({ itemId }) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    checkLikedStatus();
  }, []);

  const checkLikedStatus = async () => {
    try {
      const likedItems = await AsyncStorage.getItem('likedItems');
      if (likedItems) {
        const parsedLikedItems = JSON.parse(likedItems);
        setIsLiked(parsedLikedItems.includes(itemId));
      }
    } catch (error) {
      console.error('Error checking liked status:', error);
    }
  };

  const handleLikePress = async () => {
    try {
      // Toggle liked status in AsyncStorage
      const likedItems = await AsyncStorage.getItem('likedItems');
      let updatedLikedItems = [];

      if (likedItems) {
        updatedLikedItems = JSON.parse(likedItems);

        if (isLiked) {
          updatedLikedItems = updatedLikedItems.filter((id) => id !== itemId);
        } else {
          updatedLikedItems.push(itemId);
        }
      } else {
        updatedLikedItems = [itemId];
      }

      await AsyncStorage.setItem(
        'likedItems',
        JSON.stringify(updatedLikedItems)
      );
      setIsLiked(!isLiked);
    } catch (error) {
      console.error('Error updating liked status:', error);
    }
  };

  return (
    <AntDesign
      name={isLiked ? 'heart' : 'hearto'}
      size={24}
      color="red"
      onPress={handleLikePress}
    />
  );
};

export default LikedButton;
