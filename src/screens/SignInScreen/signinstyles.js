import { StyleSheet } from 'react-native';
import globalStyles from '../../helpers/globalStyles';

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "white",
        width: "100%"
    },
    imageContainer:{
        margin: 15
    },
    image:{
        height: 150,
        width: "100%"
    },
    formContainer:{
        marginTop : 45
    },
    formWrapper:{
        width: "100%",
    },  
    form:{
        height: 220,
        width: "90%",
        alignSelf : 'center',
        borderColor: "black",
    },
    inputWrapper:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        borderBottomWidth: 2,
        borderColor:'#663d00'
    },
    credInput:{
        paddingLeft: 10,
        width: "90%",
        letterSpacing: 1,
        fontSize: 18
    },
    button:{
        marginTop: 28,
        padding: 8,
        width: "40%",
        alignSelf:'center',
    },
    buttonText:{
        textAlign: 'center',
        letterSpacing: 2,
        fontSize: 24,
        color:'#fff',
        fontWeight:"500"
    },
    orWrapper:{
        // height: 400,
        marginVertical: 50
    },
    orWrapperText:{
        textAlign: "center",
        letterSpacing: 1.5,
        color: globalStyles.primaryColor,
        fontWeight:"600",
        fontSize: 16
    }
})

export default styles;