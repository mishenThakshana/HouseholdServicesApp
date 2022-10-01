import {View, Text} from 'react-native';

const TextCenter = ({text}) => {
  return (
    <View style={{marginVertical: 15}}>
      <Text style={{fontSize: 15}}>{text}</Text>
    </View>
  );
};

export default TextCenter;
