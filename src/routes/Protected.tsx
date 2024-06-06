import {createStackNavigator} from '@react-navigation/stack';
import {ProtectedScreens} from './types';
import {ProfileScreen, UpdateProfileScreen} from 'modules/profile';
import {COLORS, FONTS} from 'utils';

const Nav = createStackNavigator<ProtectedScreens>();

export const ProtectedStack = () => {
  return (
    <Nav.Navigator
      initialRouteName="profile"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.PRIMARY,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: FONTS.BOLD,
          fontSize: 15,
        },
        headerTintColor: COLORS.BLACK,
        headerBackTitleStyle: {
          fontSize: 15,
          fontFamily: FONTS.REGULAR,
          textTransform: 'capitalize',
        },
      }}>
      <Nav.Screen name="profile" options={{headerShown: false}} component={ProfileScreen} />
      <Nav.Screen name="update_profile" component={UpdateProfileScreen} options={{title: 'Update Profile'}} />
    </Nav.Navigator>
  );
};
