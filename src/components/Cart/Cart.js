import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './CartStyles';

const Cart = ()=>{
    const { cartItems, totalAmount } = useSelector(state => state.cart);
    const navigation = useNavigation();
    
    return(
    <View style={styles.main}>
        <View style = {styles.cartText_wrapper}>
            <Icon name='shopping-bag' size={24} color="white" />
            <Text style={styles.cartText_text}>{Object.keys(cartItems).length} Items </Text>
        </View>
        <View style = {styles.cartButton_wrapper}>
            <TouchableOpacity style={styles.cartButton_button}onPress={()=>navigation.navigate('Checkout')}>
                <Icon name='shopping-cart' size={24} color="white" />
                <Text style={styles.cartButton_buttonText}>View Cart</Text>
                <Text style={styles.cartText_text}>{'\u20B9'}{totalAmount}</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default Cart;