import {createStackNavigator} from '@react-navigation/stack';
import {TransitionPresets} from '@react-navigation/stack';
import {Login, Register} from '../screens/auth';
import HomeNavigator from './HomeNavigator';
import routes from '../constants/routes';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
        headerLeft: null,
      }}>
      <Stack.Screen name={routes.LOGIN} component={Login} />
      <Stack.Screen name={routes.REGISTER} component={Register} />
      <Stack.Screen name={routes.HOME_NAVIGATOR} component={HomeNavigator} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
