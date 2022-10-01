import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Likes, Chats, Profile} from '../screens/home';
import routes from '../constants/routes';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={routes.HOME}
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="home" color={color} size={size} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={routes.LIKES}
        component={Likes}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-heart-outline" color={color} size={size} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={routes.CHATS}
        component={Likes}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-chatbox-outline" color={color} size={size} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={routes.PROFILE}
        component={Likes}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-person-outline" color={color} size={size} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
