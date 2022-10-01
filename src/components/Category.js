import {View, Text, ImageBackground} from 'react-native';

const Category = ({image, text}) => {
  return (
    <View style={{height: 130, width: 150, marginHorizontal: 8}}>
      <ImageBackground source={image} imageStyle={{borderRadius: 26, margin: 5}}>
        <View
          style={{
            flexDirection: 'column-reverse',
            height: '100%',
            borderWidth: 2,
            borderRadius: 25,
            borderColor: '#2196F3',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              marginHorizontal: 10,
              marginVertical: 10,
              borderRadius: 30,
              padding: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#333', fontSize: 18}}>{text}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Category;
