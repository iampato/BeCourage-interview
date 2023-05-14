import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '../screens/landingScreen';
import LoginScreen from '../screens/loginScreen';
import BecourageStatusBar from '../../../components/statusBar';
import useTheme from '../../../core/theme';

export const AuthenticationScreens = {
  Landing: 'landing',
  Login: 'login',
  Register: 'register',
  ForgotPassword: 'forgotPassword',
};

const Stack = createNativeStackNavigator();

const AuthenticationNavigation = () => {
  const colors = useTheme();
  return (
    <>
      <BecourageStatusBar backgroundColor={colors.secondary} />
      <Stack.Navigator initialRouteName={AuthenticationScreens.Landing}>
        <Stack.Screen
          name={AuthenticationScreens.Landing}
          options={{headerShown: false}}
          component={LandingScreen}
        />
        <Stack.Screen
          name={AuthenticationScreens.Login}
          options={{headerShown: false}}
          component={LoginScreen}
        />
      </Stack.Navigator>
    </>
  );
};
export default AuthenticationNavigation;
