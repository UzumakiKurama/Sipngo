import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { getAuth , createUserWithEmailAndPassword } from 'firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Controller, Form, useForm } from 'react-hook-form';

import config from '../../helpers/config';
import showErrorToast from '../../helpers/ErrorHandlerPopup';
import styles from './signUpStyles';
import { setUserDetails } from '../../redux/features/userDetailsSlice';
import '../firebase';

const auth  = getAuth();

export default function Signup() {

  const { control, handleSubmit, formState: {errors, isValid} } = useForm({mode: 'onBlur'});
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const [inputBorderColor, setInputBorderColor] = useState({email: false, password:false, user_name: false, phone_no: false, user_location:false});
  
  async function doSignup(data){

    if(data.email == undefined || data.email == "") {
      setError("Email is mandatory");
      return;
    } else if(data.password == undefined || data.password == ""){
      setError("Password is mandatory");
      return;
    } else if(data.name == undefined || !(/^[a-zA-Z]+$/.test(data.name)) || data.name == ""){
      setError("Enter a Valid Name");
      return;
    } else if(data.phoneNumber == undefined || data.phoneNumber.length != 10 || data.phoneNumber == ""){
      setError("Enter a valid Phone Number");
      return;
    }

    try{
        const responseFromAuth = await createUserWithEmailAndPassword(auth , data.email , data.password);
        const authData = {...responseFromAuth};
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              user_email: data.email,
              user_id:authData.user.uid,
              user_phoneNo: data.phoneNumber,
              user_location: data.location,
              user_name: data.name
          })
      };
      const responsedata = await fetch(`${config.flaskapi}/home/signUp`,requestOptions);
      dispatch(setUserDetails({data}));
      return Promise.resolve(responsedata);
    }
    catch(error){
        switch (error.message) {
          case "Firebase: Error (auth/invalid-email).":
            setError("Invalid Email");
            break;
          case "Firebase: Error (auth/email-already-in-use).":
            setError("Email already registered");
            break;
          case "Firebase: Password should be at least 6 characters (auth/weak-password).":
            setError("Password should be at least 6 characters (weak-password).");
            break;
          default:
            setError(error.message);
            break;
        }
        return Promise.reject(error);
    }
  }

  useEffect( () => {
    if(error !== null){
      showErrorToast(error);
    }

    return () => console.log(error);
  }, [error]);

  const onFocusHandler = (inputField) => {
    let newInputBorderColor = {...inputBorderColor};
    newInputBorderColor[inputField] = true;
    setInputBorderColor(newInputBorderColor);
  }

  const onBlurHandler = (inputField) => {
    let newInputBorderColor = {...inputBorderColor};
    newInputBorderColor[inputField] = false;
    setInputBorderColor(newInputBorderColor);
  }

  const onSubmit = (data) => {
    doSignup(data);
  }

  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.header}>Signup</Text>
      <View style={styles.formContainer}>
      <View style={{...styles.inputWrapper, borderColor: inputBorderColor.email ? '#ffa31a' : 'transparent'}}>
          <Icon style={styles.icon} name='envelope' size={24} color="black" />
          <Controller
            control={control}        
            name='email'        
            render={({field: {onChange, value}}) => (            
              <TextInput 
                placeholder = '*Email'
                keyboardType='email-address'
                placeholderTextColor="grey"
                value={value}
                onChangeText={(value) => onChange(value)}
                onFocus={() => onFocusHandler('email')}
                onBlur={() => onBlurHandler('email')}
                style={styles.input} />
            )}  
          />
        </View>
        <View style={{...styles.inputWrapper, borderColor: inputBorderColor.password ? '#ffa31a' : 'transparent'}}>
          <Icon style={styles.icon} name='lock' size={24} color="black" />
          <Controller
            control={control}
            name='password' 
            render={({field: {onChange, value}}) => (
              <TextInput 
                placeholder = '*Password'
                placeholderTextColor="grey"
                value={value}
                onChangeText={(value) => onChange(value)}
                onFocus={() => onFocusHandler('password')}
                onBlur={() => onBlurHandler('password')}
                secureTextEntry = {true}
                style={styles.input} />
            )}
          />
        </View>
        <View style={{...styles.inputWrapper, borderColor: inputBorderColor.user_name ? '#ffa31a' : 'transparent'}}>
          <Icon style={styles.icon} name='user' size={24} color="black" />
          <Controller
            control={control}
            name='name' 
            render={({field: {onChange, value}}) => (
              <TextInput 
                placeholder = '*Name'
                placeholderTextColor="grey"
                value={value}
                onChangeText={(value) => onChange(value)}
                onFocus={() => onFocusHandler('user_name')}
                onBlur={() => onBlurHandler('user_name')}
                style={styles.input}/>
            )}
          />
        </View>
        <View style={{...styles.inputWrapper, borderColor: inputBorderColor.phone_no ? '#ffa31a' : 'transparent'}}> 
        <Icon style={styles.icon} name='phone' size={24} color="black" />
        <Controller
            control={control}
            name='phoneNumber' 
            render={({field: {onChange, value}}) => (
              <TextInput 
                placeholder = '*Phone'
                placeholderTextColor="grey" 
                keyboardType='phone-pad'
                inputMode='numeric'
                value={value}
                onChangeText={(value) => onChange(value)}
                onFocus={() => onFocusHandler('phone_no')}
                onBlur={() => onBlurHandler('phone_no')}
                style={styles.input}/>
            )}
          />
        </View>
        <View style={{...styles.inputWrapper, borderColor: inputBorderColor.user_location ? '#ffa31a' : 'transparent'}}>
          <Icon style={styles.icon} name='location-arrow' size={24} color="black" />
          <Controller
            control={control}
            name='location' 
            render={({field: {onChange, value}}) => (
              <TextInput 
                placeholder = '*Location'
                placeholderTextColor="grey"
                value={value}
                onChange={(value) => onChange(value)}
                onFocus={() => onFocusHandler('user_location')}
                onBlur={() => onBlurHandler('user_location')}
                style={styles.input} 
              />
            )}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title='REGISTER NOW'
            onPress = {handleSubmit(onSubmit)}
            color="#ffa31a"
            >
            </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}