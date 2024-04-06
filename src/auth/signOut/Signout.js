import { Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import { getAuth , signOut } from 'firebase/auth';

import '../firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/features/userSlice';

const auth  = getAuth();
export default  function Signout() {
  
  const dispatch = useDispatch();

  function onSignOutBtnPressHandler(){
    dispatch(setUser({email:""}));
    signOut(auth);
  }

  return (
    <View>
        <Button 
          onPress = {() => onSignOutBtnPressHandler()} 
          title = "Sign Out" />
    </View>
  );
}