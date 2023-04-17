import { Text, View, ScrollView } from 'react-native';

import Header from '../components/header';
import ProductCard from '../components/products/card';
import EmptyProducts from '../components/products/empty-products';
import Banner from '../components/banner';
import productsHook from '../hooks/productsHook';

const HomeScreen = () => {

  const products = productsHook();

  if (products == null) {
    return (
      <View className='flex items-center justify-center h-screen'>
        <Text className='text-red-500'>Cargando...</Text>
      </View>
    )
  }

  return (
    <View className='bg-black container mx-auto px-4 flex-col h-full'>
      <View className='w-full'>
        <Header />
        <Text className='text-2xl font-bold mb-4 text-red-500'>
          Nuestros productos
        </Text>
      </View>
      <View className='flex h-full'>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          <Banner />
          {products.length === 0 && (<EmptyProducts />)}
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </ScrollView>
      </View>
    </View>
  );
}

export default HomeScreen;
