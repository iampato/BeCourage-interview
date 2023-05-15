import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PolicyScreen from '../screens/policyScreen';

export const PolicyScreens = {
  Policy: 'main_policy',
};

const Stack = createNativeStackNavigator();

const PolicyNavigation = () => {
  return (
    <>
      <Stack.Navigator initialRouteName={PolicyScreens.Policy}>
        <Stack.Screen
          name={PolicyScreens.Policy}
          options={{headerShown: false}}
          component={PolicyScreen}
        />
      </Stack.Navigator>
    </>
  );
};
export default PolicyNavigation;
