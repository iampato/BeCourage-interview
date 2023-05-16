import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BecourageScaffold from '../../../components/becourageScaffold';
import {responsiveHeight, responsiveWidth} from '../../../core/sizes';
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
          <Text style={[dynamicStyles.greyTextColor, styles.userSectionAbout]}>
            View all your active policies, you can renew them here and also
            request a new one
          </Text>
        </View>
      </View>
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
    width: '95%',
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
  userSectionAbout: {
    ...TextTopography.caption,
    ...TextFontWeight.regular,
    marginBottom: responsiveHeight(3),
  },
});
export default PolicyScreen;
