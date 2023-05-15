import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useTheme from '../../../core/theme';
import BecourageScaffold from '../../../components/becourageScaffold';
import {
  responsiveHeight,
  responsiveRadius,
  responsiveWidth,
  screenWidth,
} from '../../../core/sizes';
import Lottie from 'lottie-react-native';
import TextTopography, {TextFontWeight} from '../../../core/textTopography';

import {PolicyCard, policies} from '../components/policyCard';
import {PolicyTabs} from '../components/policyTabs';
import {PriceFilter} from '../components/priceFilter';

const HomeScreen = () => {
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

  const [value, setValue] = React.useState(1000);
  const [tab, setTab] = React.useState(0);

  const onValueChanged = (value: number) => {
    setValue(value);
  };
  const onTabChanged = (value: number) => {
    setTab(value);
  };

  return (
    <BecourageScaffold containerStyle={styles.container}>
      {/* user section */}
      <View style={styles.userSectionContainer}>
        <View style={styles.userSectionDetails}>
          <Text style={[dynamicStyles.blackTextColor, styles.userSectionName]}>
            Hey Patrick Waweru
          </Text>
          <Text style={[dynamicStyles.greyTextColor, styles.userSectionAbout]}>
            Welcome to BeCourage, let's find best policy
          </Text>
        </View>

        <Image
          source={{
            uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
          }}
          resizeMode="cover"
          style={styles.imageAvatar}
        />
        {/* <Lottie
          style={styles.lottieContainer}
          source={require('../../../../assets/lottie/waving.json')}
          autoPlay
          loop
        /> */}
      </View>

      <PolicyTabs tabIndex={tab} onTabChanged={onTabChanged} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <PriceFilter value={value} onValueChanged={onValueChanged} />
        {policies.map((policy, index) => (
          <PolicyCard key={index} policy={policy} />
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
  imageAvatar: {
    height: responsiveHeight(20),
    width: responsiveHeight(20),
    borderRadius: responsiveRadius(12),
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
  lottieContainer: {
    width: responsiveWidth(45),
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
});
export default HomeScreen;
