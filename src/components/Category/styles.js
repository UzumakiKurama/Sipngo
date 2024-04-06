import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardContainer : {
        width : '46%',
        margin: 6,
        paddingBottom: 2,
        lineHeight: '0%',
        borderRadius : 10,
        backgroundColor : '#fff'
    },
    innerContainer:{
        width : '100%',
        height: 160,
        borderWidth: 0,
        padding: 0,
        margin:0,
    },
    productName: {
        width : '100%',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 15,
        letterSpacing: 1.2,
        fontWeight: "500"
    }
});

export default styles;