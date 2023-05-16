/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useTheme from '../../../core/theme';
import BecourageTextInput from '../../../components/becourageInput';
import {
  responsiveHeight,
  responsiveRadius,
  responsiveWidth,
} from '../../../core/sizes';
import TextTopography, {TextFontWeight} from '../../../core/textTopography';
import GradientButton from '../../../components/gradientButton';
import BecourageScaffold from '../../../components/becourageScaffold';
import BecourageSelectInput from '../../../components/becourageSelect';
import {MedicalInsurance} from './medicalInsuranceForm';
import OutlinedButton from '../../../components/outlinedButton';

interface QuatationFormProps {
  onNext: () => void;
  onBack: () => void;
  type: number;
}
const QuatationForm = ({onNext, onBack, type}: QuatationFormProps) => {
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
  const typeOfPolicy1 = [
    {label: 'Comprehensive', value: 'comprehensive'},
    {label: 'Third Party', value: 'third-party'},
  ];

  const carManufacturer = [
    {label: 'Toyota', value: 'toyota'},
    {label: 'Nissan', value: 'nissan'},
    {label: 'Subaru', value: 'subaru'},
    {label: 'Mitsubishi', value: 'mitsubishi'},
    {label: 'Honda', value: 'honda'},
    {label: 'Mazda', value: 'mazda'},
    {label: 'Suzuki', value: 'suzuki'},
    {label: 'Volkswagen', value: 'volkswagen'},
    {label: 'Mercedes-Benz', value: 'mercedes-benz'},
    {label: 'BMW', value: 'bmw'},
    {label: 'Audi', value: 'audi'},
    {label: 'Land Rover', value: 'land-rover'},
    {label: 'Ford', value: 'ford'},
  ];

  const carModel = [
    {label: 'Vitz', value: 'vitz'},
    {label: 'Axio', value: 'axio'},
    {label: 'Premio', value: 'premio'},
    {label: 'Allion', value: 'allion'},
    {label: 'Corolla', value: 'corolla'},
    {label: 'Passo', value: 'passo'},
    {label: 'Belta', value: 'belta'},
    {label: 'Fielder', value: 'fielder'},
  ];

  const yearOfManufacture = [
    {label: '2021', value: '2021'},
    {label: '2020', value: '2020'},
    {label: '2019', value: '2019'},
    {label: '2018', value: '2018'},
    {label: '2017', value: '2017'},
    {label: '2016', value: '2016'},
    {label: '2015', value: '2015'},
    {label: '2014', value: '2014'},
    {label: '2013', value: '2013'},
    {label: '2012', value: '2012'},
    {label: '2011', value: '2011'},
    {label: '2010', value: '2010'},
    {label: '2009', value: '2009'},
    {label: '2008', value: '2008'},
    {label: '2007', value: '2007'},
  ];

  const CarInsurance = () => {
    return (
      <>
        <Text
          style={[
            dynamicStyles.subTitleColor,
            styles.labelText,
            styles.spacer2,
          ]}>
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
          items={typeOfPolicy1}
        />

        {/* <BecourageSelectInput
          items={[
            {label: 'Comprehensive', value: 'comprehensive'},
            {label: 'Third Party', value: 'third-party'},
          ]}
          onValueChange={value => console.log(value)}
          placeholder="type of policy"
        /> */}
        {/* placeholder="type of policy" */}
        <Text
          style={[
            dynamicStyles.subTitleColor,
            styles.labelText,
            styles.spacer2,
          ]}>
          Car Valuation (KES)
        </Text>
        <BecourageTextInput
          placeholder="Ksh. 1,000,000"
          keyboardType="numeric"
        />
        <Text
          style={[
            dynamicStyles.subTitleColor,
            styles.labelText,
            styles.spacer2,
          ]}>
          Car Make
        </Text>
        <BecourageSelectInput
          placeholder={{
            label: 'Car Manufacturer',
            value: null,
            color: colors.grey,
          }}
          onValueChange={value => {
            console.log(value);
          }}
          items={carManufacturer}
        />
        <Text
          style={[
            dynamicStyles.subTitleColor,
            styles.labelText,
            styles.spacer2,
          ]}>
          Car Model
        </Text>
        <BecourageSelectInput
          placeholder={{
            label: 'Car Model',
            value: null,
            color: colors.grey,
          }}
          onValueChange={value => {
            console.log(value);
          }}
          items={carModel}
        />
        <Text
          style={[
            dynamicStyles.subTitleColor,
            styles.labelText,
            styles.spacer2,
          ]}>
          Year of Manufacture
        </Text>
        <BecourageSelectInput
          placeholder={{
            label: 'Year of Manufacture',
            value: null,
            color: colors.grey,
          }}
          onValueChange={value => {
            console.log(value);
          }}
          items={yearOfManufacture}
        />
        <Text
          style={[
            dynamicStyles.subTitleColor,
            styles.labelText,
            styles.spacer2,
          ]}>
          Car Registration Number
        </Text>
        <BecourageTextInput placeholder="KCY 098Z" />
      </>
    );
  };

  return (
    <BecourageScaffold containerStyle={styles.container}>
      <View style={styles.userSectionContainer}>
        <View style={styles.userSectionDetails}>
          <Text style={[dynamicStyles.blackTextColor, styles.userSectionName]}>
            Step2: Quatation Details
          </Text>
          <Text style={[dynamicStyles.greyTextColor, styles.userSectionAbout]}>
            Please fill in the details of the car you want to insure
          </Text>
        </View>
      </View>
      {type === 1 ? <CarInsurance /> : <MedicalInsurance />}
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainerStyle}>
        <GradientButton
          colors={[colors.primaryLight, colors.secondary]}
          title={'Submit'}
          textStyle={{textTransform: 'none'}}
          buttonStyle={styles.actionBtnSpacer}
          onPress={() => {
            onNext();
          }}
        />
        <OutlinedButton
          title={'Back'}
          buttonStyle={{
            borderColor: colors.lightGrey,
            marginBottom: responsiveHeight(5),
          }}
          textStyle={{color: colors.grey, textTransform: 'none'}}
          onPress={() => {
            onBack();
          }}
        />
      </ScrollView>
    </BecourageScaffold>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  contentContainerStyle: {
    flex: 1,
    marginTop: responsiveHeight(3),
  },
  userSectionContainer: {
    width: '100%',
    marginTop: responsiveHeight(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(5),
  },
  userSectionDetails: {
    flexDirection: 'column',
  },
  userSectionName: {
    ...TextTopography.heading5,
    ...TextFontWeight.bold,
    marginBottom: responsiveHeight(2),
  },
  userSectionAbout: {
    ...TextTopography.caption,
    ...TextFontWeight.regular,
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  waveContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: responsiveHeight(63),
  },
  userContainer: {
    position: 'absolute',
    top: responsiveHeight(63) * 0.7,
    left: '50%', // TODO: '50%' is not working, it should be '50% - width/2
    transform: [{translateX: -responsiveHeight(63) * 0.5 * 0.5}],
    borderRadius: responsiveRadius(100),
    height: responsiveHeight(63) * 0.65,
    width: responsiveHeight(63) * 0.65,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 5,
  },
  userAvator: {
    marginTop: responsiveHeight(63) * 0.13,
    fontSize: responsiveHeight(63) * 0.47,
    color: '#fff',
  },
  contentContainer: {
    position: 'absolute',
    top: responsiveHeight(63),
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderTopLeftRadius: responsiveRadius(25),
    borderTopRightRadius: responsiveRadius(25),
    paddingHorizontal: responsiveWidth(27),
  },
  headerText: {
    ...TextTopography.heading3,
    ...TextFontWeight.bold,
    textAlign: 'center',
    marginTop: responsiveHeight(35),
  },
  subtitleText: {
    textAlign: 'center',
    ...TextFontWeight.bold,
    marginTop: responsiveHeight(4),
  },
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
    marginBottom: responsiveHeight(5),
  },
});

export default QuatationForm;
