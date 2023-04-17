import { Image } from 'expo-image';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import config from '../../config.js';

export default ProductCard = ({ product }) => {

  const navigation = useNavigation();
  
  const {
    nombre,
    marca,
    modelo,
    precio,
    url_imagen
  } = product;
  
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Product', { product })}>
      <View className='border-2 border-gray-400 rounded-xl p-4 mb-4'>
        <Image
          source={`${config.URL_WEB}/${url_imagen}`}
          className='object-cover h-48 w-full border-2 border-white rounded-xl p-12 mb-4'
        />
        <Text className='text-white text-xl font-bold'>{nombre}</Text>
        <Text className='text-gray-400'>{marca} - {modelo}</Text>
        <Text className='text-yellow-400 mt-2 text-2xl font-bold'>Precio: ${precio}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
