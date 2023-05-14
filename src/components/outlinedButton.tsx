import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import useTheme from '../core/theme';
import TextTopography from '../core/textTopography';
import {responsiveHeight, responsiveRadius} from '../core/sizes';

interface OutlinedButtonProps extends TouchableOpacityProps {
  title: string;
  buttonStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const OutlinedButton: React.FC<OutlinedButtonProps> = ({
  title,
  buttonStyle,
  textStyle,
  ...props
}) => {
  const colors = useTheme();
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle, {borderColor: colors.secondary}]}
      {...props}>
      <Text style={[styles.text, textStyle, {color: colors.secondary}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: responsiveHeight(5),
    paddingHorizontal: 20,
    borderRadius: responsiveRadius(7),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2.5,
  },
  text: {
    ...TextTopography.buttonText,
    textTransform: 'uppercase',
  },
});

export default OutlinedButton;
