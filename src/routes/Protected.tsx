import {createStackNavigator} from '@react-navigation/stack';
import {ProtectedScreens} from './types';
import {ProfileScreen} from 'modules/profile';

const Nav = createStackNavigator<ProtectedScreens>();

export const ProtectedStack = () => {
  return (
    <Nav.Navigator
      initialRouteName="profile"
      screenOptions={{
        headerShown: false,
      }}>
      <Nav.Screen name="profile" component={ProfileScreen} />
    </Nav.Navigator>
  );
};
