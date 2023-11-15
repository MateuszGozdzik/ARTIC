import React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';
import { clearLikedItems } from '../utilities/Storage';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Delete All Favourites"
        onPress={() => {
          Alert.alert(
            'Delete All Favorites',
            'Are you sure you want to delete all favorites?',
            [
              { text: 'Cancel', style: 'cancel' },
              {
                text: 'Delete',
                onPress: () => clearLikedItems()
              }
            ]
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: 'black', flex: 1, paddingTop: 100 }
});
export default Settings;
