import React from 'react';
import {TextInputProps, StyleSheet, View} from 'react-native';
import RNPickerSelect, {PickerSelectProps} from 'react-native-picker-select';
import useTheme from '../core/theme';

import {
  responsiveHeight,
  responsiveRadius,
  responsiveWidth,
  screenWidth,
} from '../core/sizes';

interface BecourageTextInputProps extends PickerSelectProps {
  containerStyle?: TextInputProps['style'];
  inputStyle?: TextInputProps['style'];
  prefix?: React.ReactNode;
}

const BecourageSelectInput: React.FC<BecourageTextInputProps> = ({
  containerStyle,
  inputStyle,
  ...props
}) => {
  const colors = useTheme();

  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      borderWidth: 1,
      borderColor: 'gray',
      color: colors.text,
      width: screenWidth * 0.8,
      height: responsiveHeight(23),
    },
    inputAndroid: {
      // fontSize: 16,
      // borderWidth: 1,
      // borderColor: 'gray',
      // color: colors.text,
      // backgroundColor: colors.error,
      width: screenWidth * 0.9,
      height: responsiveHeight(23),
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 8,
      color: colors.text,
    },
  });
  return (
    <View
      style={[
        styles.container,
        containerStyle,
        inputStyle,
        {backgroundColor: colors.lightestGrey},
      ]}>
      <RNPickerSelect
        {...props}
        // value={}
        style={pickerSelectStyles}
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
    flex: 1,
  },
  prefix: {
    marginRight: responsiveWidth(10),
  },
});

export default BecourageSelectInput;
