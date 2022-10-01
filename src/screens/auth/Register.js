import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import routes from '../../constants/routes';
import styles from '../../styles/Global.style';
import Logo from '../../assets/images/signup.svg';
import {Title, Input, Button, TextCenter, SocialLogin} from '../../components';

const Register = ({navigation}) => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.rootContainer}>
        <Logo width={250} height={250} />
        <Title text="Sign up" />
        <SocialLogin />
        <TextCenter text="Or, register with email" />
        <Input type="email" placeholder="Email ID" />
        <Input type="password" placeholder="Password" />
        <Input type="name" placeholder="Full Name" />
        <Input type="company" placeholder="Company" />
        <Button label="Register" />
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate(routes.LOGIN)}>
            <Text style={{color: '#2196F3', fontWeight: 'bold'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Register;
