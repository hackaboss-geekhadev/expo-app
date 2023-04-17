import { Text, View } from 'react-native';

export default Header = () => {
  return (
    <View className='flex py-2 justify-between'>
      <Text className=" font-extrabold text-yellow-400 text-4xl">
        Next Store
      </Text>
    </View>
  );
}
