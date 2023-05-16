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
import {
  responsiveHeight,
  responsiveRadius,
  responsiveWidth,
} from '../core/sizes';

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
      style={[{borderColor: colors.secondary}, styles.button, buttonStyle]}
      {...props}>
      <Text style={[{color: colors.secondary}, styles.text, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: responsiveHeight(4.5),
    paddingHorizontal: responsiveWidth(15),
    borderRadius: responsiveRadius(17),
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
