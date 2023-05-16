import {StyleSheet, Text} from 'react-native';
import BecourageDatePicker from '../../../components/becourageDatePicker';
import BecourageTextInput from '../../../components/becourageInput';
import BecourageSelectInput from '../../../components/becourageSelect';
import React from 'react';
import useTheme from '../../../core/theme';
import {responsiveHeight} from '../../../core/sizes';
import TextTopography, {TextFontWeight} from '../../../core/textTopography';

export const MedicalInsurance = () => {
  const colors = useTheme();
  const dynamicStyles = {
    containerColor: {
      backgroundColor: colors.primary,
    },
    blackTextColor: {
      color: colors.text,
    },
    greyTextColor: {
      color: colors.grey,
    },
    userContainerColor: {
      backgroundColor: colors.secondary,
    },
    contentColor: {
      backgroundColor: colors.background,
    },
    coloredText: {
      color: colors.secondary,
    },
    subTitleColor: {
      color: colors.text,
    },
    mutedTextColor: {
      color: colors.grey,
    },
  };

  //
  // Sample data for typeOfPolicy
  const typeOfPolicy = [
    {label: 'Individual', value: 'individual'},
    {label: 'Family', value: 'family'},
    {label: 'Group', value: 'group'},
  ];

  // Sample data for insuranceProviders (Kenya)
  const insuranceProviders = [
    {label: 'APA Insurance', value: 'apa'},
    {label: 'AAR Insurance', value: 'aar'},
    {label: 'Britam Insurance', value: 'britam'},
    {label: 'Jubilee Insurance', value: 'jubilee'},
    // Add more insurance providers as needed
  ];
  return (
    <>
      <Text
        style={[dynamicStyles.subTitleColor, styles.labelText, styles.spacer2]}>
        Type of Policy
      </Text>

      <BecourageSelectInput
        placeholder={{
          label: 'Type of Policy',
          value: null,
          color: colors.grey,
        }}
        onValueChange={value => {
          console.log(value);
        }}
        items={typeOfPolicy}
      />

      <Text
        style={[dynamicStyles.subTitleColor, styles.labelText, styles.spacer2]}>
        Insurance Provider
      </Text>

      <BecourageSelectInput
        placeholder={{
          label: 'Insurance Provider',
          value: null,
          color: colors.grey,
        }}
        onValueChange={value => {
          console.log(value);
        }}
        items={insuranceProviders}
      />

      <Text
        style={[dynamicStyles.subTitleColor, styles.labelText, styles.spacer2]}>
        Policy Start Date
      </Text>

      <BecourageDatePicker
        placeholder="Select start date"
        onDateChange={date => {
          console.log(date);
        }}
      />

      <Text
        style={[dynamicStyles.subTitleColor, styles.labelText, styles.spacer2]}>
        Policy End Date
      </Text>

      <BecourageDatePicker
        placeholder="Select end date"
        onDateChange={date => {
          console.log(date);
        }}
      />

      <Text
        style={[dynamicStyles.subTitleColor, styles.labelText, styles.spacer2]}>
        Policy Holder Name
      </Text>

      <BecourageTextInput placeholder="John Doe" />

      <Text
        style={[dynamicStyles.subTitleColor, styles.labelText, styles.spacer2]}>
        Policy Holder ID
      </Text>

      <BecourageTextInput placeholder="123456789" keyboardType="numeric" />
    </>
  );
};
const styles = StyleSheet.create({
  spacer1: {
    marginTop: responsiveHeight(25),
  },
  spacer2: {
    // marginTop: responsiveHeight(3),
  },
  labelText: {
    ...TextTopography.body4,
    ...TextFontWeight.bold,

    marginBottom: responsiveHeight(1),
  },
  actionBtnSpacer: {
    marginTop: responsiveHeight(5),
  },
});
