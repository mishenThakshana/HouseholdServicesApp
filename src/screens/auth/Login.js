import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import routes from '../../constants/routes';
import styles from '../../styles/Global.style';
import Logo from '../../assets/images/login.svg';
import {Title, Input, Button, TextCenter, SocialLogin} from '../../components';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Logo width={300} height={300} />
      <Title text="Login" />
      <Input type="email" placeholder="Email ID" />
      <Input type="password" placeholder="Password" forgot={true} />
      <Button
        handler={() => navigation.navigate(routes.HOME_NAVIGATOR)}
        label="Login"
      />
      <TextCenter text="Or, login with..." />
      <SocialLogin />
      <View style={{flexDirection: 'row', marginVertical: 15}}>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>New to IJSE? </Text>
        <TouchableOpacity onPress={() => navigation.navigate(routes.REGISTER)}>
          <Text style={{color: '#2196F3', fontWeight: 'bold'}}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
