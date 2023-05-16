import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import PolicyScreen from '../screens/policyScreen';
import PolicyTabs from './policyTabs';

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
          component={PolicyTabs}
        />
      </Stack.Navigator>
    </>
  );
};
export default PolicyNavigation;
