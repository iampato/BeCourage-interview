import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BecourageScaffold from '../../../components/becourageScaffold';
import {
  responsiveHeight,
  responsiveRadius,
  responsiveWidth,
} from '../../../core/sizes';
import TextTopography, {TextFontWeight} from '../../../core/textTopography';
import useTheme from '../../../core/theme';
import {MyPolicyCard, myPolicies} from '../components/policyCard';

const PolicyScreen = () => {
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
      {/* user section */}
      <View style={styles.userSectionContainer}>
        <View style={styles.userSectionDetails}>
          <Text style={[dynamicStyles.blackTextColor, styles.userSectionName]}>
            My Policies
          </Text>
        </View>
      </View>
      <Text>Policy Screen</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {myPolicies.map((policy, index) => (
          <MyPolicyCard key={index} policy={policy} />
        ))}
      </ScrollView>
    </BecourageScaffold>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(15),
  },
  userSectionContainer: {
    width: '100%',
    marginTop: responsiveHeight(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userSectionDetails: {
    flexDirection: 'column',
  },
  userSectionName: {
    ...TextTopography.heading5,
    ...TextFontWeight.medium,
    marginBottom: responsiveHeight(3),
  },

  policyContainer: {
    paddingHorizontal: responsiveWidth(15),
    paddingVertical: responsiveHeight(10),
    borderRadius: responsiveRadius(10),
    flexDirection: 'row',
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
export default PolicyScreen;
