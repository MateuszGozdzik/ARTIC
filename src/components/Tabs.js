import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllImages from '../screens/AllImages';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'All'} component={AllImages} />
    </Tab.Navigator>
  );
};

export default Tabs;
