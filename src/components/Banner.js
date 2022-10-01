import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import WomanCooking from '../assets/images/woman_cooking.jpg';

const Banner = () => {
  return (
    <View>
      <ImageBackground source={WomanCooking} resizeMode="cover">
        <View style={{padding: 30}}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 35,
            }}>
            We will
          </Text>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 35,
            }}>
            always help
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            marginHorizontal: 25,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
            marginBottom: 10,
          }}>
          <TextInput
            style={{padding: 10, fontSize: 18}}
            placeholder="How can I help you?"
            placeholderTextColor="gray"
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#2196F3',
              padding: 10,
              borderRadius: 20,
            }}>
            <Ionicon name="ios-arrow-forward" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Banner;
