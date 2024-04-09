import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import globalStyles from '../../helpers/globalStyles';

const style = StyleSheet.create({
    container : {
        backgroundColor: globalStyles.primaryColor,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
    },
    btnText : {
        color : '#fff'
    }
})

const CustomButton = ({
    title, 
    onPress,
}) => {
  return (
    <TouchableOpacity
        style={style.container}
        onPress={onPress}
        >
        <Text style={style.btnText}>
            { title }
        </Text>
    </TouchableOpacity>
  ) 
}

export default CustomButton;