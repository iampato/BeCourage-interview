import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationNavigation from '../features/authentication/navigation/authenticationNavigation';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AuthenticationNavigation />
    </NavigationContainer>
  );
};
export default RootNavigation;
