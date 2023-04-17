import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import AppStack from './src/stacks/AppStack.js';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={{ flex: 1, marginTop: Constants.statusBarHeight, background: '#000' }}>
      <StatusBar style="dark" backgroundColor={'#000'} />
      <AppStack />
    </View>
  );
}
