import React from 'react';
import { getAuth ,onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/features/userSlice';

const firebaseConfig = {
    apiKey: "AIzaSyDAwPoKeWTFJjbQHYj8yQK7mxxaf7PTGh0",
    authDomain: "sipngoauth.firebaseapp.com",
    projectId: "sipngoauth",
    storageBucket: "sipngoauth.appspot.com",
    messagingSenderId: "418587868994",
    appId:"1:418587868994:web:a7ae8237e4f70bdd7752d"
  };

initializeApp(firebaseConfig);

const auth = getAuth();
export default function userAuthentication(){

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    React.useEffect( ()=>{
        onAuthStateChanged(auth , (user)=>{

            if (user.uid !== ""){
                dispatch(setUser({uid: user.uid}));
            }
            else{
                dispatch(setUser({uid: ""}))
            }
        })
    }, []);

    return user;
}