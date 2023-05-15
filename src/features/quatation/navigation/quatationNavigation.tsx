import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QuatationScreen from '../screens/quatationScreen';

export const QuatationScreens = {
  Quatation: 'main_quatation',
};

const Stack = createNativeStackNavigator();

const QuatationNavigation = () => {
  return (
    <>
      <Stack.Navigator initialRouteName={QuatationScreens.Quatation}>
        <Stack.Screen
          name={QuatationScreens.Quatation}
          options={{headerShown: false}}
          component={QuatationScreen}
        />
      </Stack.Navigator>
    </>
  );
};
export default QuatationNavigation;
