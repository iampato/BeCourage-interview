import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';

export const HomeScreens = {
  Home: 'main_home',
};

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <>
      <Stack.Navigator initialRouteName={HomeScreens.Home}>
        <Stack.Screen
          name={HomeScreens.Home}
          options={{headerShown: false}}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </>
  );
};
export default HomeNavigation;
