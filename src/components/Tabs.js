import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllImages from '../screens/AllImages';
import FavImages from '../screens/FavouriteImages';
import SearchImages from '../screens/SearchImages';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ImageDescription from '../screens/imageDescription';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'lightblue',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'black'
        },
        headerStyle: {
          backgroundColor: 'black'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'white'
        },
        headerTitleAlign: 'center'
      }}
    >
      <Tab.Screen
        name={'All'}
        component={AllImages}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={24}
              color={focused ? 'lightblue' : 'gray'}
            />
          )
        }}
      />
      <Tab.Screen
        name={'Favourite'}
        component={FavImages}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="hearto"
              size={24}
              color={focused ? 'lightblue' : 'gray'}
            />
          )
        }}
      />
      <Tab.Screen
        name={'Search'}
        component={SearchImages}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="search"
              size={24}
              color={focused ? 'lightblue' : 'gray'}
            />
          )
        }}
      />
      <Tab.Screen
        name={'ImgDecr'}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="hearto"
              size={24}
              color={focused ? 'lightblue' : 'gray'}
            />
          )
        }}
      >
        {() => <ImageDescription itemId={3061} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
