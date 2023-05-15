import {useColorScheme} from 'react-native';

const Colors = {
  theme: 'light',
  light: {
    background: '#ffffff',
    text: '#000000',
    primary: '#41ac58',
    primaryLight: '#5ecf77',
    secondary: '#3d9f4f',
    secondaryLight: '#1f9344',
    orange: '#FFA500',
    placeholder: '#A8A8A8',
    error: '#FF3B30',
    success: '#4CD964',
    grey: '#8E8E93',
    strongGrey: '#C7C7CC',
    lightGrey: '#EFEFF4',
    accent1: '#e0ede4',
    accent1Bolder: '#82ac8e',
    accent2: '#f2e7d8',
    accent2Bolder: '#d0b79b',
    accent3: '#f4ebed',
    accent3Bolder: '#c6a9b4',
    accent4: '#e8e5f0',
    accent4Bolder: '#a9a3c5',
    accent5: '#e5e8f0',
    accent5Bolder: '#a3a9c5',
    accent6: '#f0edf3',
    accent6Bolder: '#c5bfa9',
    accent7: '#9cc1ae',
    accent7Bolder: '#5f876f',
    accent8: '#b7d8cb',
    accent8Bolder: '#4c7963',
    accent9: '#d7ece2',
    accent9Bolder: '#8ccca7',

    // accent2: '#fde9cb',
    // accent2Bolder: '#e6ac3e',
    // accent3: '#c6b5f2',
    // accent3Bolder: '#9b7bed',
    // accent4: '#b6c8f1',
    // accent4Bolder: '#81a3f0',
  },
  dark: {
    background: '#000000',
    text: '#ffffff',
    primary: '#1f9344',
    primaryLight: '#007AFF',
    secondary: '#5ecf77',
    secondaryLight: '#FF9500',
    orange: '#2B211E',
    placeholder: '#A8A8A8',
    error: '#FF3B30',
    success: '#4CD964',
    grey: '#474747',
    strongGrey: '#333333',
    lightGrey: '#2C313B',
    accent1: '#e0ede4',
    accent1Bolder: '#82ac8e',
    accent2: '#f2e7d8',
    accent2Bolder: '#d0b79b',
    accent3: '#f4ebed',
    accent3Bolder: '#c6a9b4',
    accent4: '#e8e5f0',
    accent4Bolder: '#a9a3c5',
    accent5: '#e5e8f0',
    accent5Bolder: '#a3a9c5',
    accent6: '#f0edf3',
    accent6Bolder: '#c5bfa9',
    accent7: '#9cc1ae',
    accent7Bolder: '#5f876f',
    accent8: '#b7d8cb',
    accent8Bolder: '#4c7963',
    accent9: '#d7ece2',
    accent9Bolder: '#8ccca7',
  },
};

const useTheme = () => {
  const colorScheme = useColorScheme();
  if (!colorScheme) {
    return Colors.light;
  }
  const colors = Colors[colorScheme];
  return colors;
};

export default useTheme;
