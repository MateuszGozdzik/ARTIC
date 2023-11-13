import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { toggleLikedStatus, checkLikedStatus } from '../utilities/Storage';

const LikedButton = ({ itemId }) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const loadLikedStatus = async () => {
      const likedStatus = await checkLikedStatus(itemId);
      setIsLiked(likedStatus);
    };

    loadLikedStatus();
  }, []);

  const handleLikePress = async () => {
    try {
      await toggleLikedStatus(itemId);
      setIsLiked(!isLiked); // Update local state to trigger re-render
    } catch (error) {
      console.error('Error toggling liked status:', error);
    }
  };

  return (
    <TouchableOpacity onPress={handleLikePress}>
      <AntDesign name={isLiked ? 'heart' : 'hearto'} size={24} color="red" />
    </TouchableOpacity>
  );
};

export default LikedButton;
