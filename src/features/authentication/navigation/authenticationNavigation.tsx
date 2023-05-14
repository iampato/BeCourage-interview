import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '../screens/landingScreen';

export const AuthenticationScreens = {
  Landing: 'landing',
};

const Stack = createNativeStackNavigator();

const AuthenticationNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={AuthenticationScreens.Landing}>
      <Stack.Screen
        name={AuthenticationScreens.Landing}
        component={LandingScreen}
      />
    </Stack.Navigator>
  );
};
export default AuthenticationNavigation;
