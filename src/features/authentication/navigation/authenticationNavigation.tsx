import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '../screens/landingScreen';
import LoginScreen from '../screens/loginScreen';
import BecourageStatusBar from '../../../components/statusBar';
import useTheme from '../../../core/theme';
import RegisterScreen from '../screens/registerScreen';
import ForgotPasswordScreen from '../screens/forgotPasswordScreen';

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
        <Stack.Screen
          name={AuthenticationScreens.Register}
          options={{headerShown: false}}
          component={RegisterScreen}
        />
        <Stack.Screen
          name={AuthenticationScreens.ForgotPassword}
          options={{headerShown: false}}
          component={ForgotPasswordScreen}
        />
      </Stack.Navigator>
    </>
  );
};
export default AuthenticationNavigation;
