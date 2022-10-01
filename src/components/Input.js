import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/Global.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Input = ({type, placeholder, forgot = false}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {type === 'email' && (
          <Icon name="alternate-email" size={20} color="#A9A9A9" />
        )}
        {type === 'password' && (
          <Icon name="lock-outline" size={20} color="#A9A9A9" />
        )}
        {type === 'name' && (
          <FontAwesome name="user-o" size={20} color="#A9A9A9" />
        )}
        {type === 'company' && (
          <Icon name="storefront" size={20} color="#A9A9A9" />
        )}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={type === 'password' ? true : false}
          placeholderTextColor="#A9A9A9"
        />
      </View>
      {forgot && (
        <View>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot?</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Input;
