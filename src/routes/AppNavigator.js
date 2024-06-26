import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DrawerNavigator from './DrawerNavigator';
import Checkout from '../screens/CheckoutScreen/Checkout';
import OrderSummary from '../screens/OrderSummary/OrderSummary';
import Profile from '../screens/ProfileScreen/Profile';
import Product from '../screens/ProductScreen/Product';
import Subscription from '../screens/SubscriptionScreen/Subscription';
import PaymentStatus from '../screens/PaymentSuccessScreen/PaymentStatus';

const Stack = createStackNavigator();
const AppNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name = "Drawer"
          component={DrawerNavigator}
          options={{
            title: "",
            headerShown: false
          }} 
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
          }} 
        />
        <Stack.Screen 
          name = "Checkout"
          component={Checkout} 
          options={{
            title : "Checkout"
          }}/>
        <Stack.Screen
          name = "OrderSummary"
          component={OrderSummary}
          options={{
            title:"Order Summary"
          }}
        />
        <Stack.Screen
          name = "Profile"
          component={Profile}
          options={{
            title:"Profile"
          }} 
        />
        <Stack.Screen
          name = "Products"
          component = {Product}
          options={({ route }) => ({ 
            title: route.params.titleValue,
            headerShown : false,
            headerStyle: {
              backgroundColor: '#f4511e',
            }
          })}
        />
        <Stack.Screen
          name = "Subscription"
          component = {Subscription} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name = "PaymentSuccess"
          component={PaymentStatus}
          options={{
            title:"Payment"
          }} 
        /> 
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;