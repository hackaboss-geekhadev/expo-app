import { Text, TouchableHighlight, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

const ProductScreen = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const product = route.params.product;

  return (
    <View className='bg-black container mx-auto px-4 flex-col h-full'>
      <View className='w-full'>
        <Header />
        <Text className='text-2xl font-bold mb-4 text-red-500'>
          Producto
        </Text>
      </View>
      <ProductCard key={product.id} product={product} />
      <TouchableHighlight
        className='border-2 border-yellow-400 text-white font-bold py-4 px-4 rounded-xl mb-4'
        onPress={() => navigation.goBack()}>
        <Text className='text-gray-400'>Agregar al carrito</Text>
      </TouchableHighlight>
      <TouchableHighlight
        className='border-2 border-gray-400 text-white font-bold py-4 px-4 rounded-xl mb-4'
        onPress={() => navigation.goBack()}>
        <Text className='text-gray-400'>Volver</Text>
      </TouchableHighlight>
    </View>
  );
}

export default ProductScreen;
