import { Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Base64Image from '../Base64Image/Base64Image';
import styles from './styles';

export default function Category({Name ,  Value , Id , Image}){
  const navigation = useNavigation();
  return (
    <TouchableOpacity 
      style={styles.cardContainer} 
      onPress={ () => navigation.navigate('Products' , {titleName:Name , titleValue :Value  , titleId: Id , image: Image})}>
        <View style={styles.innerContainer}>
          <View style={styles.productImage}>
            <Base64Image base64String={Image} />  
          </View>
          <Text style={styles.productName}>
            {Name}
          </Text>
        </View>
    </TouchableOpacity>
  )
};
