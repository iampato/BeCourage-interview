import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useTheme from '../../../core/theme';
import BecourageScaffold from '../../../components/becourageScaffold';
import {appConstants} from '../../../core/constants';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveRadius,
} from '../../../core/sizes';
import TextTopography, {TextFontWeight} from '../../../core/textTopography';

const QuatationScreen = () => {
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
            {appConstants.appName}
          </Text>
          <Text style={[dynamicStyles.greyTextColor, styles.userSectionAbout]}>
            Your quotation, you can also request one
          </Text>
        </View>

        <Image
          source={{
            uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
          }}
          resizeMode="cover"
          style={styles.imageAvatar}
        />
      </View>
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
export default QuatationScreen;
