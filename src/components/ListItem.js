import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LikedButton from './LikedButton';

const ListItem = ({ itemData }) => {
  const navigation = useNavigation();

  const handleItemPress = () => {
    navigation.navigate('ImageDescription', { itemId: itemData.id });
  };

  const imageUri = itemData.image_id
    ? {
        uri: `https://www.artic.edu/iiif/2/${itemData.image_id}/full/843,/0/default.jpg`
      }
    : require('../../assets/no-image.jpeg');

  return (
    <TouchableOpacity onPress={handleItemPress}>
      <ImageBackground source={imageUri} style={styles.imageBackground}>
        <View style={styles.overlay}>
          <Text style={styles.text}>{itemData.title}</Text>
          <LikedButton itemId={itemData.id} style={styles.icon} />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    resizeMode: 'contain',
    justifyContent: 'center',
    height: 250
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    padding: 16
  },
  text: {
    color: 'white',
    fontSize: 24
  }
});

export default ListItem;
