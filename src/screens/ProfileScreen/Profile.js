import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Button, TextInput } from 'react-native'
import GetLocation from 'react-native-get-location';
import styles from './styles';

const Profile = () => {
  const { userDetails } = useSelector(state => state.userDetails);
  const [address, setAddress] = useState('Loading....');
  const [errorMsg, setErrorMsg] = useState(null);

  const locationPermission = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
    .then(location => {
      console.log(location);
    })
    .catch(error => {
      const { code, message } = error;
      console.warn(code, message);
    })
  };
  return (
    <View style={styles.main}>
      <View style={styles.currLocationBtn}>
        <Button
          title='Use current location'
          color='#cc5200'
          onPress={locationPermission}>
        </Button>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <View style={{flex:1, height: 2, backgroundColor: '#000'}} />
        <View>
          <Text style={{width: 30, color:'#000', fontSize: 17, textAlign: 'center'}}>OR</Text>
        </View>
        <View style={{flex: 1, height: 2, backgroundColor: '#000'}} />
      </View>
      <View style={styles.userDetails}>
        <Text 
          style={styles.textInputLabel}>
          Full name (First and Last name)
        </Text>
        <TextInput style={styles.textInput} value="Abhijeet Behera"/>
        <Text style={styles.textInputLabel}>Mobile number</Text>
        <TextInput style={styles.textInput}/>
      </View>
    </View>
  )
}

export default Profile;