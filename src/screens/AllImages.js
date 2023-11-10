import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const AllImages = () => {
  const Data = [
    { title: 'Simon' },
    { title: 'Simon' },
    { title: 'Simon' },
    { title: 'Simon' },
    { title: 'Simon' },
    { title: 'Simon' },
    { title: 'Simon' },
    { title: 'Simon' },
    { title: 'Simon' },
    { title: 'Simon' },
    { title: 'Simon' },
    { title: 'Simon' },
    { title: 'Simon' },
    { title: 'Simon' }
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        renderItem={({ item }) => <Item title={item.title} />}
      />
    </View>
  );
};

styles = StyleSheet.create({
  container: { backgroundColor: 'black', flex: 1 },
  item: { backgroundColor: 'grey', padding: 5, margin: 3, borderRadius: 10 },
  itemTitle: {
    textAlign: 'center'
  }
});
export default AllImages;
