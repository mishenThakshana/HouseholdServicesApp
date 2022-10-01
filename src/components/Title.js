import {View, Text} from 'react-native';
import styles from '../styles/Global.style';

const Title = ({text}) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default Title;
