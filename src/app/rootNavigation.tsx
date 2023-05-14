import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationNavigation from '../features/authentication/navigation/authenticationNavigation';
import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params: Object) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
}

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthenticationNavigation />
    </NavigationContainer>
  );
};
export default RootNavigation;
