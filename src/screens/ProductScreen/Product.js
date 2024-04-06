import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect , useState } from 'react';
import { useRoute  } from "@react-navigation/native"
import { useDispatch, useSelector } from 'react-redux';

import { addToCart, removeFromCart } from '../../redux/features/cartSlice';
import Footer from '../../components/Footer/Footer';
import Base64Image from '../../components/Base64Image/Base64Image';
import config from '../../helpers/config';
import styles from './styles';

export default function Product(){
  
  const route = useRoute();
  const dispatch = useDispatch();
  const [ data, setData ] = useState([]);
  const [ showCart, setShowCart ] = useState();
  const [ loading, setLoading ] = useState(true);
  const { cartItems } = useSelector(state => state.cart);

  let headerArray = route.params.titleValue
    .split(' ')
    .map(item => {
      return item.replace(item[0], item[0].toUpperCase())
    });
  let header = headerArray.join(" ");

  const fetchCategory = async (id) => {
    const resp = await fetch(`${config.flaskapi}/home/category?id=${id}`).then(res => res.json()); 
    setData(resp);
    setLoading(false);
  };

  useEffect( () =>{ 
    fetchCategory(route.params.titleId) 
  }, [])

  // const addToCart = (amount , name , id , image) =>{
  //   const curCart = {...cartItem};
  //   if (name in curCart){
  //     curCart[name].cnt+=1;
  //   }
  //   else{
  //     curCart[name] = {"amount":amount , "cnt":1 , "id":id , "image":image};
  //   }
  //   setShowCart(showCart+1);
  //   setCartItem(curCart);
  // }

  // const removeFromCart=(amount , name)=>{
  //   const curCart = {...cartItem};
  //   curCart[name].cnt-=1;

  //   if (curCart[name].cnt==0){
  //     delete curCart[name];
  //   }
  
  //   setShowCart(showCart-1);
  //   setCartItem(curCart);
  // }

  return (
    <View style={styles.main}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>
          {header}
        </Text>
      </View>
      <ScrollView style = {styles.scrollViewContainer}>
        {
          data.map((item,id) => (
            <View style={styles.container} key={id}>
              <View style={styles.card}>
                <View style = {styles.cardText}>
                  <Text style = {styles.cardText_name}>
                    {item.name}
                  </Text>
                  <Text style = {styles.cardText_price}>
                    <Text>{'\u20B9'}</Text>{item.price}
                  </Text>
                </View>
                <View style = {styles.cardImage}>
                  <Base64Image base64String={item.img} />  
                  {
                    cartItems[item.name]?.cnt ? 
                      <View style = {styles.countContainer}>
                        <TouchableOpacity 
                          style={styles.button_decrease} 
                          onPress = { () => dispatch(removeFromCart({name: item.name, price: item.price})) }>
                            <Text style={styles.button_text}>-</Text>
                        </TouchableOpacity>
                        <View style={styles.countText}>
                          <Text style={styles.button_text}>
                            {cartItems[item.name]?.cnt}
                          </Text>
                        </View>
                        <TouchableOpacity 
                          style={styles.button_increase} 
                          onPress={ () => dispatch(addToCart({name: item.name, price: item.price, id: item.id})) }>
                            <Text style={styles.button_text}>+</Text>
                        </TouchableOpacity>
                      </View> :
                      <TouchableOpacity 
                        style = {styles.countContainer}  
                        onPress={ () => dispatch(addToCart({name: item.name, price: item.price, id: item.id})) }>
                        <Text style = {styles.button_text}>ADD</Text>
                      </TouchableOpacity>
                  }
                </View>
              </View>
              <Text style={{color: 'grey', marginHorizontal: 2}} ellipsizeMode="clip" numberOfLines={1}>
                &nbsp;- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - -
              </Text>
            </View>
        ))}
      </ScrollView>
      <View>
        <View>
          {Object.keys(cartItems).length>=1 ? <Footer/> : null}
        </View>
      </View>
    </View>
  )
}

