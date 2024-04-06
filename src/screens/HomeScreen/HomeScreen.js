import { SafeAreaView, View, FlatList} from 'react-native';
import { useEffect , useState } from 'react';
import { useSelector } from 'react-redux';

import Category from '../../components/Category/Category';
import Footer from '../../components/Footer/Footer';
import config from '../../helpers/config';
import styles from './HomeScreenStyles';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const { cartItems } = useSelector(state => state.cart);

  const fetchCategory = () => {
    fetch(`${config.flaskapi}/home`)
      .then(res => res.json())
      .then(res => {
        setData(res);
      })
      .catch(error => console.log("FETCHING DATA ERROR : ", error)); 
  };

  useEffect( () => fetchCategory() ,[] )

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.listContainer}>
        <FlatList
          data = {data}
          numColumns={2}
          renderItem={ ({item}) => ( 
            <Category 
                Name={item.name} 
                Value={item.name} 
                Id={item.id} 
                Image={item.img}> 
            </Category>
          )}>
        </FlatList>
      </View>
      {Object.keys(cartItems).length >= 1 ? <Footer/> : null}
    </SafeAreaView>
  );
};

export default HomeScreen;


