import { View } from 'react-native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootSiblingParent } from 'react-native-root-siblings';

import AppNavigator from './src/routes/AppNavigator';
import userAuthentication from './src/auth/userAuthentication';
import AuthStack from './src/routes/AuthStack';
import { calculateTotalAmount } from './src/redux/features/cartSlice';
import './src/auth/firebase';

export default function Auth() {

  const dispatch = useDispatch();
  const user = userAuthentication();
  const { cartItems } = useSelector(state => state.cart);

  useEffect( () => {
    dispatch(calculateTotalAmount());
  }, [cartItems]);

  return (
    <RootSiblingParent>
      <GestureHandlerRootView style={{flex: 1}}>
        <View style={{flex:1}}>
            {user.uid === "" ? <AuthStack/> : <AppNavigator/>}
        </View>
      </GestureHandlerRootView>
    </RootSiblingParent>
  );
}