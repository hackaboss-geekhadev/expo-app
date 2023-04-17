import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/home-screen';
import ProductScreen from '../screens/product-screen';

const StackPublic = createNativeStackNavigator();

export default AppStack = () => {
  return (
    <NavigationContainer>
      <StackPublic.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false, animation: 'none' }} >
        <StackPublic.Screen name="Home" component={HomeScreen} />
        <StackPublic.Screen name="Product" component={ProductScreen} />
      </StackPublic.Navigator>
    </NavigationContainer>
  );
}
