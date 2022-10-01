import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/Global.style';
import Google from '../assets/images/google.svg';
import Facebook from '../assets/images/facebook.svg';
import Apple from '../assets/images/apple.svg';

const SocialLogin = () => {
  return (
    <View style={styles.socialLoginContainer}>
      <View>
        <TouchableOpacity style={styles.socialBtnContainer}>
          <Google width={30} height={30} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.socialBtnContainer}>
          <Facebook width={30} height={30} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.socialBtnContainer}>
          <Apple width={30} height={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialLogin;
