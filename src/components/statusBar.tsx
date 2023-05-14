import {useColorScheme, StatusBar} from 'react-native';
import useTheme from '../core/theme';
import React from 'react';

export interface BecourageStatusBarProps {
  backgroundColor?: string;
}
const BecourageStatusBar = ({backgroundColor}: BecourageStatusBarProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const color = useTheme();
  const backgroundStyle = {
    backgroundColor: backgroundColor ?? color.background,
  };
  return (
    <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={backgroundStyle.backgroundColor}
    />
  );
};
export default BecourageStatusBar;
