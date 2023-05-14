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

interface RaisedButtonProps extends TouchableOpacityProps {
  title: string;
  buttonStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const RaisedButton: React.FC<RaisedButtonProps> = ({
  title,
  buttonStyle,
  textStyle,
  ...props
}) => {
  const colors = useTheme();
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle, {backgroundColor: colors.secondary}]}
      {...props}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: responsiveHeight(5.5),
    paddingHorizontal: 20,
    borderRadius: responsiveRadius(7),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    ...TextTopography.buttonText,
    textTransform: 'uppercase',
  },
});

export default RaisedButton;
