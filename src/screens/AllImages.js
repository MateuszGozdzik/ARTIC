import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AllImages = () => {
  const Data = [
    {
      title: 'Simon',
      image_uri:
        'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'
    },
    {
      title: 'Simon',
      image_uri:
        'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'
    },
    {
      title: 'Simon',
      image_uri:
        'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'
    },
    {
      title: 'Simon',
      image_uri:
        'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'
    },
    {
      title: 'Simon',
      image_uri:
        'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'
    },
    {
      title: 'Simon',
      image_uri:
        'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'
    },
    {
      title: 'Simon',
      image_uri:
        'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'
    }
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png'
        }}
      />
      <Text style={styles.itemTitle}>{title}</Text>

      <AntDesign name="hearto" size={24} color="red" />
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
  image: { width: 50, height: 50 }
});
export default AllImages;
