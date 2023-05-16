import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveRadius,
  screenWidth,
} from '../../../core/sizes';
import useTheme from '../../../core/theme';
import BecourageScaffold from '../../../components/becourageScaffold';
import TextTopography, {TextFontWeight} from '../../../core/textTopography';
import MdIcon from 'react-native-vector-icons/MaterialIcons';

interface QuatationTypeProps {
  onNext: (type: number) => void;
}
const QuatationType = ({onNext}: QuatationTypeProps) => {
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
  };

  return (
    <BecourageScaffold containerStyle={styles.container}>
      <View style={styles.userSectionContainer}>
        <View style={styles.userSectionDetails}>
          <Text style={[dynamicStyles.blackTextColor, styles.userSectionName]}>
            Step1: Type of insurance
          </Text>
          <Text style={[dynamicStyles.greyTextColor, styles.userSectionAbout]}>
            Please select the type of insurance you want to add
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={[{backgroundColor: colors.accent1}, styles.policyCard]}>
          <Text style={styles.policyName}>Motor Insurance</Text>
          <View style={styles.policyRow}>
            <View style={styles.policyCol}>
              <Text style={[styles.policyLabel, dynamicStyles.greyTextColor]}>
                Lowest Price
              </Text>
              <Text style={[styles.policyValue, {color: colors.accent1Bolder}]}>
                Ksh. 2000
              </Text>
            </View>
            <View style={styles.policyCol}>
              <Text style={[styles.policyLabel, dynamicStyles.greyTextColor]}>
                No. of Policies
              </Text>
              <Text style={[styles.policyValue, {color: colors.accent1Bolder}]}>
                10
              </Text>
            </View>
            <View style={styles.spacer} />
            <TouchableOpacity
              onPress={() => onNext(1)}
              style={[
                styles.purchaseButton,
                {backgroundColor: colors.accent1Bolder},
              ]}>
              <MdIcon name="arrow-right-alt" size={30} color={colors.text} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[{backgroundColor: colors.accent2}, styles.policyCard]}>
          <Text style={styles.policyName}>Medical Insurance</Text>
          <View style={styles.policyRow}>
            <View style={styles.policyCol}>
              <Text style={[styles.policyLabel, dynamicStyles.greyTextColor]}>
                Lowest Price
              </Text>
              <Text style={[styles.policyValue, {color: colors.accent2Bolder}]}>
                Ksh. 500
              </Text>
            </View>
            <View style={styles.policyCol}>
              <Text style={[styles.policyLabel, dynamicStyles.greyTextColor]}>
                No. of Policies
              </Text>
              <Text style={[styles.policyValue, {color: colors.accent2Bolder}]}>
                18
              </Text>
            </View>
            <View style={styles.spacer} />
            <TouchableOpacity
              onPress={() => onNext(2)}
              style={[
                styles.purchaseButton,
                {backgroundColor: colors.accent2Bolder},
              ]}>
              <MdIcon name="arrow-right-alt" size={30} color={colors.text} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </BecourageScaffold>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  policyCard: {
    borderRadius: responsiveRadius(20),
    paddingHorizontal: responsiveWidth(12),
    paddingVertical: responsiveHeight(7),
    marginVertical: responsiveHeight(3),
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
    alignItems: 'center',
  },
  policyCol: {
    marginRight: responsiveWidth(20),
  },
  policyLabel: {
    ...TextTopography.smallText,
    ...TextFontWeight.regular,
  },
  spacer: {
    flex: 1,
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

export default QuatationType;
