import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LikedButton from './LikedButton';

const ListItem = ({ itemData }) => {
  const navigation = useNavigation();

  const handleItemPress = () => {
    navigation.navigate('ImageDescription', { itemId: itemData.id });
  };

  return (
    <TouchableOpacity onPress={handleItemPress}>
      <View style={styles.item}>
        {itemData.image_id ? (
          <Image
            style={styles.image}
            source={{
              uri: `https://www.artic.edu/iiif/2/${itemData.image_id}/full/843,/0/default.jpg`
            }}
          />
        ) : (
          <Image
            style={styles.image}
            source={require('../../assets/amongus.png')}
          />
        )}
        <Text style={styles.text}>{itemData.title}</Text>
        <LikedButton itemId={itemData.id} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'grey',
    padding: 5,
    paddingHorizontal: 20,
    margin: 3,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: { width: 50, height: 50, borderRadius: 10 },
  text: { maxWidth: 200, textAlign: 'center' }
});

export default ListItem;
