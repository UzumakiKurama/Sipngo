import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Signout from '../screens/SingOutScreen/Signout';
import SubscriptionDetails from '../screens/SubscriptionScreen/SubscriptionDetails';
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Profile from "../screens/ProfileScreen/Profile";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} />
      <Drawer.Screen 
        name="Profile" 
        component={Profile} />
      <Drawer.Screen
        name="Subscription Details"
        component={SubscriptionDetails} /> 
      <Drawer.Screen 
        name="Signout" 
        component={Signout} /> 
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
