import React from 'react';
import { View, StyleSheet } from 'react-native';
import ItemList from '../components/List';

const FavImages = () => {
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

  return (
    <View style={styles.container}>
      <ItemList data={Data} />
    </View>
  );
};

styles = StyleSheet.create({
  container: { backgroundColor: 'black', flex: 1 }
});
export default FavImages;
