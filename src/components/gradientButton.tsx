import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import TextTopography from '../core/textTopography';
import {responsiveHeight, responsiveRadius} from '../core/sizes';
import LinearGradient from 'react-native-linear-gradient';
import useTheme from '../core/theme';

interface GradientButtonProps extends TouchableOpacityProps {
  title: string;
  colors: string[];
  buttonStyle?: StyleProp<TextStyle>;
  gradientStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  title,
  buttonStyle,
  gradientStyle,
  textStyle,
  colors,
  ...props
}) => {
  const themeColors = useTheme();
  return (
    <TouchableOpacity style={buttonStyle} {...props}>
      <LinearGradient
        style={[styles.button, gradientStyle]}
        colors={colors}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0}}>
        <Text style={[{color: themeColors.background}, styles.text, textStyle]}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: responsiveHeight(5.5),
    paddingHorizontal: 20,
    borderRadius: responsiveRadius(17),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...TextTopography.buttonText,
    textTransform: 'uppercase',
  },
});

export default GradientButton;
