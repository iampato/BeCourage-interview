import {ScrollView, StyleSheet, Text, View} from 'react-native';
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
import GradientButton from '../../../components/gradientButton';
import { navigate } from '../../../app/rootNavigation';
import { QuatationScreens } from '../../quatation/navigation/quatationNavigation';

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

  const handleAddQuatation = () => {
    navigate(QuatationScreens.AddQuatation, {});
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
      <GradientButton
        colors={[colors.primaryLight, colors.secondary]}
        title={'Request Quotation'}
        // eslint-disable-next-line react-native/no-inline-styles
        textStyle={{textTransform: 'none'}}
        gradientStyle={styles.actionBtnSpacer}
        onPress={handleAddQuatation}
      />
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
  actionBtnSpacer: {
    position: 'absolute',
    bottom: responsiveHeight(10),
    right: responsiveWidth(5),
    elevation: 5,
    paddingVertical: responsiveHeight(5),
    borderRadius: responsiveRadius(25),
  },
});
export default PolicyScreen;
