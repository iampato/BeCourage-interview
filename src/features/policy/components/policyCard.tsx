import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import useTheme from '../../../core/theme';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import {
  responsiveHeight,
  responsiveRadius,
  responsiveWidth,
} from '../../../core/sizes';
import TextTopography, {TextFontWeight} from '../../../core/textTopography';

interface PolicyModel {
  policyType: string;
  policyName: string;
  policyAbout: string;
  policyImage: string;
}
export const myPolicies: PolicyModel[] = [
  {
    policyType: 'Life',
    policyName: 'Jubilee Insurance',
    policyAbout:
      'Your policy purchased on January, 2023 will expires in 10 days',
    policyImage:
      'https://jubileeinsurance.com/ke/wp-content/uploads/2021/04/logo.png',
  },
  {
    policyType: 'Life',
    policyName: 'Jubilee Insurance',
    policyAbout:
      'Your policy purchased on January, 2023 will expires in 10 days',
    policyImage: 'https://www.apainsurance.org/img/logon.png',
  },
  {
    policyType: 'Life',
    policyName: 'Jubilee Insurance',
    policyAbout:
      'Your policy purchased on January, 2023 will expires in 10 days',
    policyImage:
      'https://www.madison.co.ke/wp-content/uploads/2020/12/cropped-favicon-180x180.jpg',
  },
];

interface PolicyCardProps {
  policy: PolicyModel;
}
export const MyPolicyCard = ({policy}: PolicyCardProps) => {
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
      backgroundColor: colors.lightGrey,
    },

    primaryColor: {
      color: colors.primary,
    },
    secondaryColor: {
      color: colors.secondary,
    },
  };

  return (
    <View style={[dynamicStyles.lightGreyBgColor, styles.policyContainer]}>
      <Image
        source={{
          uri: policy.policyImage,
        }}
        style={styles.policyImage}
      />
      <View style={styles.policyDetails}>
        <Text style={[styles.policyType, dynamicStyles.greyTextColor]}>
          {policy.policyType}
        </Text>
        <Text style={[styles.policyName, dynamicStyles.blackTextColor]}>
          {policy.policyName}
        </Text>
        <Text style={[styles.policyAbout, dynamicStyles.greyTextColor]}>
          Your policy purchased on January, 2023 will{' '}
          <Text style={{color: 'red'}}>expires in 10 days</Text>{' '}
        </Text>
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          style={styles.renewButton}
          colors={[colors.secondary, colors.primaryLight]}>
          <Text style={[styles.renewText, dynamicStyles.whiteTextColor]}>
            Renew Now
          </Text>
          <View style={styles.renewIcons}>
            <SimpleIcon name="arrow-right" color={colors.background} />
            <SimpleIcon
              name="arrow-right"
              color={colors.background}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{opacity: 0.7}}
            />
            <SimpleIcon
              name="arrow-right"
              color={colors.background}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{opacity: 0.3}}
            />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  policyContainer: {
    paddingHorizontal: responsiveWidth(15),
    paddingVertical: responsiveHeight(10),
    borderRadius: responsiveRadius(10),
    flexDirection: 'row',
    marginVertical: responsiveHeight(3),
  },
  policyImage: {
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    borderRadius: responsiveRadius(100),
  },
  policyDetails: {
    marginLeft: responsiveWidth(12),
    flexDirection: 'column',
  },
  policyType: {
    ...TextTopography.body5,
    ...TextFontWeight.medium,
  },
  policyName: {
    ...TextTopography.heading5,
    ...TextFontWeight.bold,
  },
  policyAbout: {
    ...TextTopography.body5,
    ...TextFontWeight.medium,
    marginTop: responsiveHeight(6),
    marginBottom: responsiveHeight(5),
  },
  renewButton: {
    borderRadius: responsiveRadius(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveWidth(150),
    paddingVertical: responsiveHeight(4.5),
    paddingHorizontal: responsiveWidth(10),
  },
  renewText: {
    ...TextTopography.body5,
    ...TextFontWeight.bold,
  },
  renewIcons: {
    flexDirection: 'row',
  },
});
