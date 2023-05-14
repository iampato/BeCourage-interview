import {useColorScheme} from 'react-native';

const Colors = {
  theme: 'light',
  light: {
    background: '#ffffff',
    text: '#000000',
    primary: '#5ecf77',
    primaryLight: '#007AFF',
    secondary: '#1f9344',
    secondaryLight: '#FF9500',
    placeholder: '#A8A8A8',
    error: '#FF3B30',
    success: '#4CD964',
  },
  dark: {
    background: '#000000',
    text: '#ffffff',
    primary: '#1f9344',
    primaryLight: '#007AFF',
    secondary: '#5ecf77',
    secondaryLight: '#FF9500',
    placeholder: '#A8A8A8',
    error: '#FF3B30',
    success: '#4CD964',
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
