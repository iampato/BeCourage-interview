import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import useTheme from '../../../core/theme';
import {
  responsiveHeight,
  responsiveRadius,
  responsiveWidth,
} from '../../../core/sizes';
import TextTopography, {TextFontWeight} from '../../../core/textTopography';
import MdCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface QuoteModel {
  insuranceName: string;
  insuranceImage: string;
  insuranceBenefits: number;
  insuranceType: string;
  insurancePlan: string;
  annualPrice: number;
  deposit: number;
  monthlyPrice: number;
}
export const quoutes: QuoteModel[] = [
  {
    insuranceName: 'Jubilee Insurance',
    insuranceImage:
      'https://github.com/iampato/BeCourage/blob/main/assets/images/jubilee.png?raw=true',
    insuranceBenefits: 1000000,
    insuranceType: 'Medical',
    insurancePlan: 'Advantage Plan',
    annualPrice: 10000,
    deposit: 1000,
    monthlyPrice: 1000,
  },
  {
    insuranceName: 'APA Insurance',
    insuranceImage:
      'https://github.com/iampato/BeCourage/blob/main/assets/images/apa.png?raw=true',
    insuranceBenefits: 1500000,
    insuranceType: 'Medical',
    insurancePlan: 'Prestige Plan',
    annualPrice: 15000,
    deposit: 1500,
    monthlyPrice: 3500,
  },
  {
    insuranceName: 'Madison Insurance',
    insuranceImage:
      'https://github.com/iampato/BeCourage/blob/main/assets/images/madison.jpeg?raw=true',
    insuranceBenefits: 2000000,
    insuranceType: 'Medical',
    insurancePlan: 'Premium Plan',
    annualPrice: 20000,
    deposit: 2000,
    monthlyPrice: 5000,
  },
];

interface QuoteCardProps {
  quote: QuoteModel;
}
export const QuoteCard = ({quote}: QuoteCardProps) => {
  const colors = useTheme();
  const dynamicStyles = {
    blackTextColor: {
      color: colors.text,
    },
    whiteTextColor: {
      color: colors.background,
    },
    greyTextColor: {
      color: colors.grey,
    },
    strongGreyTextColor: {
      color: colors.strongGrey,
    },
    primaryBgColor: {
      backgroundColor: colors.primaryLight,
    },
    greyBgColor: {
      backgroundColor: colors.grey,
    },
    lightGreyBgColor: {
      backgroundColor: colors.lighterGrey,
    },

    primaryColor: {
      color: colors.primary,
    },
    secondaryColor: {
      color: colors.secondary,
    },
  };

  return (
    <View style={[{backgroundColor: colors.lighterGrey}, styles.policyCard]}>
      <View style={styles.quoteImageRow}>
        <Image
          source={{
            uri: quote.insuranceImage,
          }}
          style={styles.quoteImage}
        />
        <View style={styles.quoteImageCol}>
          <Text style={styles.policyName}>{quote.insuranceName}</Text>
          <Text style={styles.quoteBenefits}>
            Benefits: {quote.insuranceBenefits}
          </Text>
        </View>
        <View style={[styles.purchaseButton, dynamicStyles.primaryBgColor]}>
          <MdCIcon name="cart" size={25} color={colors.background} />
        </View>
      </View>
      <View style={styles.policyRow}>
        <View style={styles.policyCol}>
          <Text style={[styles.policyLabel, dynamicStyles.greyTextColor]}>
            Annual Price
          </Text>
          <Text
            style={[
              styles.policyValue,
              //   {color: getPolicyAccentBolderColor(policy.color)},
            ]}>
            Ksh. {quote.annualPrice}
          </Text>
        </View>
        <View style={styles.policyCol}>
          <Text style={[styles.policyLabel, dynamicStyles.greyTextColor]}>
            Deposit
          </Text>
          <Text
            style={[
              styles.policyValue,
              //   {color: getPolicyAccentBolderColor(policy.color)},
            ]}>
            Ksh. {quote.deposit}
          </Text>
        </View>
        <View style={styles.policyCol}>
          <Text style={[styles.policyLabel, dynamicStyles.greyTextColor]}>
            Monthly Price
          </Text>
          <Text
            style={[
              styles.policyValue,
              //   {color: getPolicyAccentBolderColor(policy.color)},
            ]}>
            Ksh. {quote.monthlyPrice}
          </Text>
        </View>
      </View>
      <View style={styles.purchaseRow}>
        <View style={styles.policyRow}>
          <View style={[styles.policyChip, {borderColor: colors.grey}]}>
            <Text style={[dynamicStyles.greyTextColor, styles.policyTitle]}>
              Individual Cover: {quote.insurancePlan}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  policyCard: {
    borderRadius: responsiveRadius(20),
    paddingHorizontal: responsiveWidth(12),
    paddingVertical: responsiveHeight(5),
    marginVertical: responsiveHeight(5),
  },
  policyName: {
    ...TextTopography.body3,
    ...TextFontWeight.semiBold,
    color: 'black',
  },
  quoteBenefits: {
    ...TextTopography.smallText,
    ...TextFontWeight.regular,
    marginTop: responsiveHeight(0.5),
  },
  policyRow: {
    flexDirection: 'row',
    marginTop: responsiveHeight(5),
  },
  policyCol: {
    marginRight: responsiveWidth(20),
  },
  policyLabel: {
    ...TextTopography.smallText,
    ...TextFontWeight.regular,
  },
  policyValue: {
    ...TextTopography.body4,
    ...TextFontWeight.bold,
  },
  policyChip: {
    borderWidth: 1.1,
    borderRadius: responsiveRadius(15),
    marginRight: responsiveWidth(10),
    marginTop: responsiveHeight(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  policyTitle: {
    ...TextTopography.smallText,
    ...TextFontWeight.medium,
    paddingHorizontal: responsiveWidth(9),
    paddingVertical: responsiveHeight(3),
  },
  purchaseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  purchaseButton: {
    // height: responsiveHeight(20),
    // width: responsiveWidth(48),
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveWidth(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveRadius(10),
  },
  quoteImage: {
    width: responsiveWidth(28),
    height: responsiveWidth(28),
    borderRadius: responsiveRadius(100),
    marginRight: responsiveWidth(12),
  },
  quoteImageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveHeight(3),
  },
  quoteImageCol: {
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
  },
});
