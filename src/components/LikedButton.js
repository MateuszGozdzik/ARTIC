import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const LikedButton = ({ itemId, isLiked }) => {
  const handleLikePress = () => {
    // Handle liked status change if needed
    console.log(`Item ${itemId} is now ${isLiked ? 'liked' : 'unliked'}`);
  };

  return (
    <TouchableOpacity onPress={handleLikePress}>
      <AntDesign name={isLiked ? 'heart' : 'hearto'} size={24} color="red" />
    </TouchableOpacity>
  );
};

export default LikedButton;
