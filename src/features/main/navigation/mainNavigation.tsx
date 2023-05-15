import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigation from '../../home/navigation/homeNavigation';
import PolicyNavigation from '../../policy/navigation/policyNavigation';
import QuatationNavigation from '../../quatation/navigation/quatationNavigation';
import CommissionNavigation from '../../commission/navigation/commissionNavigation';
import useTheme from '../../../core/theme';
import BecourageStatusBar from '../../../components/statusBar';
import OctIcon from 'react-native-vector-icons/Octicons';
import MdIcon from 'react-native-vector-icons/MaterialIcons';
// import MdCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome5';
import {responsiveHeight} from '../../../core/sizes';
import TextTopography, {TextFontWeight} from '../../../core/textTopography';

export const MainScreens = {
  Home: 'Home',
  Policy: 'Policy',
  Quatation: 'Quotation',
  Commission: 'Commission',
};

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  const colors = useTheme();
  return (
    <>
      <BecourageStatusBar backgroundColor={colors.background} />
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.grey,
          
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => {
            switch (route.name) {
              case MainScreens.Home:
                return <OctIcon name="home" size={size} color={color} />;
              case MainScreens.Policy:
                return <MdIcon name="fact-check" size={size} color={color} />;
              case MainScreens.Quatation:
                return <OctIcon name="tag" size={size} color={color} />;
              case MainScreens.Commission:
                return (
                  <FaIcon name="hand-holding-usd" size={size} color={color} />
                );
              default:
                return <OctIcon name="home" size={size} color={color} />;
            }
          },
          tabBarLabelStyle: {
            ...TextFontWeight.semiBold,
            ...TextTopography.body5,
          },
          tabBarItemStyle: {
            elevation: 10,
            marginBottom: responsiveHeight(3),
          },
          tabBarStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.background,
            
            // borderTopColor: colors.black_1,
            height: responsiveHeight(29),
          },
        })}>
        <Tab.Screen name={MainScreens.Home} component={HomeNavigation} />
        <Tab.Screen name={MainScreens.Policy} component={PolicyNavigation} />
        <Tab.Screen
          name={MainScreens.Quatation}
          component={QuatationNavigation}
        />
        <Tab.Screen
          name={MainScreens.Commission}
          component={CommissionNavigation}
        />
      </Tab.Navigator>
    </>
  );
};
export default MainNavigation;
