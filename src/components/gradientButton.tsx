import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import TextTopography from '../core/textTopography';
import {responsiveHeight, responsiveRadius} from '../core/sizes';
import LinearGradient from 'react-native-linear-gradient';

interface GradientButtonProps extends TouchableOpacityProps {
  title: string;
  colors: string[];
  buttonStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  title,
  buttonStyle,
  textStyle,
  colors,
  ...props
}) => {
  return (
    <TouchableOpacity style={buttonStyle} {...props}>
      <LinearGradient
        style={styles.button}
        colors={colors}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0}}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
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
    color: 'white',
    ...TextTopography.buttonText,
    textTransform: 'uppercase',
  },
});

export default GradientButton;
