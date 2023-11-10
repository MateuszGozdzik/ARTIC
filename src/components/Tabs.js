import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllImages from '../screens/AllImages';

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
      <Tab.Screen name={'All'} component={AllImages} />
    </Tab.Navigator>
  );
};

export default Tabs;
