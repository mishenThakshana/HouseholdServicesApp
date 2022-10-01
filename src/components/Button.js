import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../styles/Global.style';

const Button = ({label, handler}) => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity onPress={handler} style={styles.btn}>
        <Text style={styles.btnLabel}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
