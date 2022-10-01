import {View, Text, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Worker = ({
  image,
  service,
  organization,
  price,
  startingTime,
  endingTime,
}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        height: 180,
        marginHorizontal: 16,
        marginVertical: 14,
        borderRadius: 10,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image
          source={image}
          style={{
            width: 90,
            height: 90,
            borderRadius: 150 / 2,
            overflow: 'hidden',
            margin: 10,
          }}
        />
        <View style={{marginVertical: 28}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
            {service}
          </Text>
          <Text style={{fontSize: 16}}>{organization}</Text>
        </View>
        <View style={{marginVertical: 28, marginHorizontal: 15}}>
          <Entypo name="dots-three-vertical" size={22} color="#000" />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 30,
          marginVertical: 8,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 16, color: '#000', fontWeight: 'bold'}}>
            {`${price}$`}
          </Text>
          <Text>Per hour</Text>
        </View>
        <View
          style={{
            height: '100%',
            width: 1,
            backgroundColor: '#909090',
          }}></View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 16, color: '#000', fontWeight: 'bold'}}>
            {startingTime} AM - {endingTime} PM
          </Text>
          <Text>Working hours</Text>
        </View>
      </View>
    </View>
  );
};

export default Worker;
