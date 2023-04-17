import { Image } from 'expo-image';
import { TouchableHighlight, Linking } from 'react-native';
import config from '../config.js';

export default Banner = () => {
  return (
    <TouchableHighlight onPress={() => { Linking.openURL(config.URL_WEB) }} >
      <Image
        accessibilityLabel='Banner'
        source={{ uri: `${config.URL_WEB}/banner.webp` }}
        className='object-contain w-full border-2 border-white rounded-xl mb-4'
        width={100}
        height={80}
      />
    </TouchableHighlight>
  );
};
