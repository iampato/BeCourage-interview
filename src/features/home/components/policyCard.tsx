import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useTheme from '../../../core/theme';
import {
  responsiveRadius,
  responsiveWidth,
  responsiveHeight,
  screenWidth,
} from '../../../core/sizes';
import TextTopography, {TextFontWeight} from '../../../core/textTopography';
import MdIcon from 'react-native-vector-icons/MaterialIcons';

interface PolicyCardProps {
  policy: PolicyModel;
}
export const PolicyCard = ({policy}: PolicyCardProps) => {
  const colors = useTheme();

  const dynamicStyles = {
    blackTextColor: {
      color: colors.text,
    },
    whiteTextColor: {
      color: colors.background,
    },
    greyTextColor: {
      color: colors.strongGrey,
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
      backgroundColor: colors.lightGrey,
    },
  };

  const getPolicyAccentColor = (color: number) => {
    switch (color) {
      case 1:
        return colors.accent1;
      case 2:
        return colors.accent2;
      case 3:
        return colors.accent3;
      case 4:
        return colors.accent4;
      case 5:
        return colors.accent5;
      case 6:
        return colors.accent6;
      case 7:
        return colors.accent7;
      case 8:
        return colors.accent8;
      case 9:
        return colors.accent9;
      default:
        return colors.accent1;
    }
  };

  const getPolicyAccentBolderColor = (color: number) => {
    switch (color) {
      case 1:
        return colors.accent1Bolder;
      case 2:
        return colors.accent2Bolder;
      case 3:
        return colors.accent3Bolder;
      case 4:
        return colors.accent4Bolder;
      case 5:
        return colors.accent5Bolder;
      case 6:
        return colors.accent6Bolder;
      case 7:
        return colors.accent7Bolder;
      case 8:
        return colors.accent8Bolder;
      case 9:
        return colors.accent9Bolder;
      default:
        return colors.accent1Bolder;
    }
  };
  return (
    <View
      style={[
        {backgroundColor: getPolicyAccentColor(policy.color)},
        styles.policyCard,
      ]}>
      <Text style={styles.policyName}>{policy.name}</Text>
      <View style={styles.policyRow}>
        <View style={styles.policyCol}>
          <Text style={[styles.policyLabel, dynamicStyles.greyTextColor]}>
            Cover Amount
          </Text>
          <Text
            style={[
              styles.policyValue,
              {color: getPolicyAccentBolderColor(policy.color)},
            ]}>
            Ksh. {policy.coverAmount}
          </Text>
        </View>
        <View style={styles.policyCol}>
          <Text style={[styles.policyLabel, dynamicStyles.greyTextColor]}>
            Premium
          </Text>
          <Text
            style={[
              styles.policyValue,
              {color: getPolicyAccentBolderColor(policy.color)},
            ]}>
            Ksh. {policy.premium}/Month
          </Text>
        </View>
      </View>
      <View style={styles.purchaseRow}>
        <View style={styles.policyRow}>
          {policy.features.map((feature: string, index: number) => (
            <View
              key={index}
              style={[styles.policyChip, {borderColor: colors.grey}]}>
              <Text style={[dynamicStyles.greyTextColor, styles.policyTitle]}>
                {feature}
              </Text>
            </View>
          ))}
        </View>
        <View
          style={[
            styles.purchaseButton,
            {backgroundColor: getPolicyAccentBolderColor(policy.color)},
          ]}>
          <MdIcon name="arrow-right-alt" size={30} color={colors.text} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  policyCard: {
    borderRadius: responsiveRadius(20),
    paddingHorizontal: responsiveWidth(12),
    paddingVertical: responsiveHeight(7),
    marginVertical: responsiveHeight(5),
  },
  policyName: {
    ...TextTopography.body1,
    ...TextFontWeight.semiBold,
    color: 'black',
    paddingRight: screenWidth * 0.3,
    lineHeight: responsiveHeight(14),
    marginBottom: responsiveHeight(8),
  },
  policyRow: {
    flexDirection: 'row',
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
  },
  purchaseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  purchaseButton: {
    height: responsiveHeight(20),
    width: responsiveWidth(48),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveRadius(10),
  },
});

interface PolicyModel {
  name: string;
  coverAmount: number;
  premium: number;
  features: string[];
  color: number;
}

export const policies: PolicyModel[] = [
  {
    name: 'Madison Insurance',
    coverAmount: 25000,
    premium: 1000,
    features: ['No room rent limit', 'Hospital cash'],
    color: 1,
  },
  {
    name: 'Jubilee Insurance',
    coverAmount: 30000,
    premium: 2000,
    features: ['7 days waiting', '100% No claim bonus'],
    color: 2,
  },
  {
    name: 'APA Insurance',
    coverAmount: 35000,
    premium: 1000,
    features: ['Accidental death', '100% No claim bonus'],
    color: 3,
  },
  {
    name: 'Britam Insurance',
    coverAmount: 40000,
    premium: 1000,
    features: ['50% No claim bonus', '5 days waiting'],
    color: 4,
  },
  {
    name: 'Resolution Insurance',
    coverAmount: 50000,
    premium: 5000,
    features: ['50% No claim bonus', '5 days waiting'],
    color: 5,
  },
  {
    name: 'ICEA Lion Insurance',
    coverAmount: 55000,
    premium: 5000,
    features: ['50% No claim bonus', '5 days waiting'],
    color: 6,
  },
  {
    name: 'Heritage Insurance',
    coverAmount: 57000,
    premium: 6000,
    features: ['50% No claim bonus', '5 days waiting'],
    color: 8,
  },
];
