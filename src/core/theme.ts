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
    strongGrey: '#7D7D82',
    lightGrey: '#C4C4C6',
    lighterGrey: '#D9D9DA',
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
  dark: {
    background: '#121212',
    text: '#ffffff',
    primary: '#299049',
    primaryLight: '#41b06a',
    secondary: '#1f7f3f',
    secondaryLight: '#00732c',
    orange: '#ffa500',
    placeholder: '#444444',
    error: '#ff3b30',
    success: '#4cd964',
    grey: '#a7a7a8',
    strongGrey: '#474754',
    lightGrey: '#c4c4c6',
    lighterGrey: '#474754',
    accent1: '#d0e0e4',
    accent1Bolder: '#62828e',
    accent2: '#e2d7c8',
    accent2Bolder: '#b09b7b',
    accent3: '#e6debd',
    accent3Bolder: '#c0a9b4',
    accent4: '#dcd9e0',
    accent4Bolder: '#a3a3b5',
    accent5: '#d9dcd0',
    accent5Bolder: '#a3a9b5',
    accent6: '#e0dcd3',
    accent6Bolder: '#b5a3a3',
    accent7: '#8cc1ae',
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
