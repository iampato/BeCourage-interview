import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationNavigation from '../features/authentication/navigation/authenticationNavigation';
import {createNavigationContainerRef} from '@react-navigation/native';
import MainNavigation from '../features/main/navigation/mainNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params: Object) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
}

export const RootScreens = {
  Auth: 'auth',
  Main: 'main',
};

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={RootScreens.Auth}>
        <Stack.Screen
          name={RootScreens.Auth}
          options={{headerShown: false}}
          component={AuthenticationNavigation}
        />
        <Stack.Screen
          name={RootScreens.Main}
          options={{headerShown: false}}
          component={MainNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;
