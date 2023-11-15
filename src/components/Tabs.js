import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AllImages from '../screens/AllImages';
import FavImages from '../screens/FavouriteImages';
import SearchImages from '../screens/SearchImages';
import ImageDescription from '../screens/ImageDescription';
import Settings from '../screens/Settings';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = () => (
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
      name={'Settings'}
      component={Settings}
      options={{
        tabBarIcon: ({ focused }) => (
          <AntDesign
            name="setting"
            size={24}
            color={focused ? 'lightblue' : 'gray'}
          />
        )
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MainTabs"
      component={MainTabs}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ImageDescription"
      component={ImageDescription}
      options={{
        title: 'Image Description',
        headerStyle: {
          backgroundColor: 'black'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'white'
        },
        headerTintColor: 'white'
      }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
