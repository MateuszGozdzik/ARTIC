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
      storedLikedItems.splice(index, 1);
    } else {
      storedLikedItems.push(id);
    }

    await AsyncStorage.setItem('likedItems', JSON.stringify(storedLikedItems));
    return true;
  } catch (error) {
    console.error('Error toggling liked status:', error);
    return false;
  }
};

const clearLikedItems = async () => {
  try {
    await AsyncStorage.removeItem('likedItems');
    console.log('Liked items cleared successfully.');
  } catch (error) {
    console.error('Error clearing liked items:', error);
  }
};

export { loadLikedItems, checkLikedStatus, toggleLikedStatus, clearLikedItems };
