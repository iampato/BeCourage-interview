import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CommissionScreen from '../screens/commissionScreen';

export const CommissionScreens = {
  Commission: 'main_commission',
};

const Stack = createNativeStackNavigator();

const CommissionNavigation = () => {
  return (
    <>
      <Stack.Navigator initialRouteName={CommissionScreens.Commission}>
        <Stack.Screen
          name={CommissionScreens.Commission}
          options={{headerShown: false}}
          component={CommissionScreen}
        />
      </Stack.Navigator>
    </>
  );
};
export default CommissionNavigation;
