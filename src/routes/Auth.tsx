import {createStackNavigator} from '@react-navigation/stack';
import {AuthScreens} from './types';
import {LoginScreen, RegisterScreen} from 'modules/auth';

const Nav = createStackNavigator<AuthScreens>();

export const AuthStack = () => {
  return (
    <Nav.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
      }}>
      <Nav.Screen name="login" component={LoginScreen} />
      <Nav.Screen name="register" component={RegisterScreen} />
    </Nav.Navigator>
  );
};
