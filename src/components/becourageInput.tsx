import React from 'react';
import {TextInput, TextInputProps, StyleSheet, View} from 'react-native';
import useTheme from '../core/theme';
import {
  responsiveHeight,
  responsiveRadius,
  responsiveWidth,
} from '../core/sizes';

interface BecourageTextInputProps extends TextInputProps {
  containerStyle?: TextInputProps['style'];
  inputStyle?: TextInputProps['style'];
  prefix?: React.ReactNode;
}

const BecourageTextInput: React.FC<BecourageTextInputProps> = ({
  containerStyle,
  inputStyle,
  ...props
}) => {
  const colors = useTheme();
  return (
    <View
      style={[
        styles.container,
        containerStyle,
        inputStyle,
        {backgroundColor: colors.lightestGrey},
      ]}>
      {props.prefix && <View style={styles.prefix}>{props.prefix}</View>}
      <TextInput
        style={[
          containerStyle,
          inputStyle,
          {backgroundColor: colors.lightestGrey, width: '70%'},
        ]}
        underlineColorAndroid="transparent"
        placeholderTextColor="gray"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(23),
    borderRadius: responsiveRadius(10),
    paddingHorizontal: responsiveWidth(10),
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  prefix: {
    marginRight: responsiveWidth(10),
  },
});

export default BecourageTextInput;
