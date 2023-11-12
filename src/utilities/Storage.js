import AsyncStorage from '@react-native-async-storage/async-storage';

const loadLikedItems = async () => {
  try {
    const storedLikedItems = await AsyncStorage.getItem('likedItems');
    return storedLikedItems ? JSON.parse(storedLikedItems) : [];
  } catch (error) {
    console.error('Error loading liked items:', error);
    return [];
  }
};

const checkLikedStatus = async (id) => {
  try {
    const storedLikedItems = await loadLikedItems();
    return storedLikedItems.includes(id);
  } catch (error) {
    console.error('Error checking liked status:', error);
    return null;
  }
};

const toggleLikedStatus = async (id) => {
  try {
    const storedLikedItems = await loadLikedItems();
    const index = storedLikedItems.indexOf(id);

    if (index !== -1) {
      // Item is liked, so remove it
      storedLikedItems.splice(index, 1);
    } else {
      // Item is not liked, so add it
      storedLikedItems.push(id);
    }

    await AsyncStorage.setItem('likedItems', JSON.stringify(storedLikedItems));
    return true;
  } catch (error) {
    console.error('Error toggling liked status:', error);
    return false;
  }
};

export { loadLikedItems, checkLikedStatus, toggleLikedStatus };