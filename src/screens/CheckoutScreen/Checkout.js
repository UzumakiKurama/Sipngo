import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './CheckoutStyles';
import { addToCart, removeFromCart } from '../../redux/features/cartSlice';

const Checkout = ()=>{
    const navigation = useNavigation();
    const dispatch = useDispatch()

    const { cartItems, totalAmount }  = useSelector(state => state.cart);

    return(
    <View style={styles.main}>
        <Text style={styles.header}>ITEMS ADDED</Text>
        <ScrollView style = {styles.scrollViewContainer}>
          {Object.keys(cartItems).map((key ,id)=>(
            <View style={styles.item} key={id}>
              <View style = {styles.itemName_wrapper}>
                <Text style={styles.itemName}>{key}</Text>
                <Text style={styles.itemCost}>₹{cartItems[key].amount}</Text>
              </View>
              <View style={styles.itemCountContainer}>
                <View style = {styles.itemCountControl}>
                  <TouchableOpacity style={styles.itemCount_decrease} onPress = { () => dispatch(removeFromCart({name: key}))}>
                    <Text style={styles.itemCountControl_text}>-</Text>
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.itemCount_text}>{cartItems[key].cnt}</Text>
                  </View>
                  <TouchableOpacity style={styles.itemCount_increase} onPress={ () => dispatch(addToCart({name: key}))} >
                    <Text style={styles.itemCountControl_text}>+</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.itemCount_amountText}>₹{cartItems[key].amount*cartItems[key].cnt}</Text>
                </View>
              </View>
            </View>
        ))}
        </ScrollView>
        <View style={styles.billContainer}>
          <Text style={styles.header}>BILL SUMMARY</Text>
          <View style={styles.bill_body}>
            <Text style={styles.billText}>Net Payable </Text>
            <Text style={styles.billText_amount}>₹{totalAmount}</Text>
          </View>
        </View>
        <View style ={styles.footer}>
          <TouchableOpacity 
            style = {styles.footer_button} 
            onPress={()=>navigation.navigate('OrderSummary')}>
              <Text style={styles.footer_buttonText}>
                Checkout
              </Text>
              <View style={{paddingRight: 25}}>
                <Text style={styles.footer_totalAmount}>₹{totalAmount}</Text>
                <Text style={styles.footer_totalText} >TOTAL</Text>
              </View>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Checkout;