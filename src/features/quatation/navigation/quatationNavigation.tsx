import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QuatationScreen from '../screens/quatationScreen';
import AddQuatationScreen from '../screens/addQuatationScreen';

export const QuatationScreens = {
  Quatation: 'main_quatation',
  AddQuatation: 'add_quotation',
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
        <Stack.Screen
          name={QuatationScreens.AddQuatation}
          options={{headerShown: false}}
          component={AddQuatationScreen}
        />
      </Stack.Navigator>
    </>
  );
};
export default QuatationNavigation;
