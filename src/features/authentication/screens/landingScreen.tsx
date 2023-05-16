import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import useTheme from '../../../core/theme';
import {
  responsiveHeight,
  responsiveRadius,
  responsiveWidth,
  screenHeight,
} from '../../../core/sizes';
import OutlinedButton from '../../../components/outlinedButton';
import TextTopography, {TextFontWeight} from '../../../core/textTopography';
import {navigate} from '../../../app/rootNavigation';
import {AuthenticationScreens} from '../navigation/authenticationNavigation';
import BecourageScaffold from '../../../components/becourageScaffold';
import GradientButton from '../../../components/gradientButton';
import BecourageStatusBar from '../../../components/statusBar';

const LandingScreen = () => {
  const colors = useTheme();

  const dynamicStyles = {
    upperContainerColor: {
      backgroundColor: colors.primary,
    },
  };

  const handleLoginOnPress = () => {
    navigate(AuthenticationScreens.Login, {});
  };
  const handleRegisterOnPress = () => {
    navigate(AuthenticationScreens.Register, {});
  };

  return (
    <BecourageScaffold>
      <BecourageStatusBar backgroundColor={colors.background} />
      <View style={[styles.upperContainer]}>
        <Image
          source={require('../../../../assets/images/banner.png')}
          style={styles.upperImage}
          resizeMode="contain"
        />
      </View>
      <View style={[styles.lowerContainer, dynamicStyles.upperContainerColor]}>
        <Text style={[styles.appName, {color: colors.background}]}>
          BeCourage
        </Text>
        <Text style={[styles.appDescription, {color: colors.background}]}>
          Insurance on wheels made easy Insurance on wheels made easyInsurance
          on wheels made easyInsurance on wheels made easyInsurance on wheels
          made easy
        </Text>
        <View style={styles.spacer1} />
        <GradientButton
          colors={[colors.background, colors.background]}
          title={'Login'}
          textStyle={{color: colors.text}}
          buttonStyle={styles.actionBtnSpacer}
          onPress={handleLoginOnPress}
        />
        <OutlinedButton
          title={'Register'}
          buttonStyle={{borderColor: colors.background}}
          textStyle={{color: colors.background}}
          onPress={handleRegisterOnPress}
        />
        <View style={styles.termsContainer}>
          <Text style={[styles.termsText, {color: colors.background}]}>
            By signing up, you agree to our{' '}
            <Text style={[styles.linkText, {color: colors.orange}]}>
              Terms and Conditions
            </Text>{' '}
            and{' '}
            <Text style={[styles.linkText, {color: colors.orange}]}>
              Privacy Policy
            </Text>
            .
          </Text>
        </View>
      </View>
    </BecourageScaffold>
  );
};

const styles = StyleSheet.create({
  upperContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperImage: {
    height: screenHeight * 0.45,
    marginBottom: responsiveHeight(10),
  },
  lowerContainer: {
    marginTop: responsiveHeight(15),
    paddingHorizontal: responsiveWidth(15),
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flex: 1.1,
    paddingBottom: responsiveHeight(5),
    borderTopLeftRadius: responsiveRadius(25),
    borderTopRightRadius: responsiveRadius(25),
  },
  appName: {
    ...TextTopography.heading3,
    ...TextFontWeight.bold,
    marginTop: responsiveHeight(10),
    marginBottom: responsiveHeight(1),
  },
  appDescription: {
    ...TextTopography.body4,
    opacity: 0.7,
    marginBottom: responsiveHeight(10),
  },
  spacer1: {
    flexGrow: 1,
  },
  actionBtnSpacer: {
    marginBottom: responsiveHeight(6),
  },
  termsContainer: {
    marginTop: responsiveHeight(10),
    opacity: 0.8,
  },
  termsText: {
    ...TextTopography.caption,
  },
  linkText: {
    ...TextTopography.caption,
    ...TextFontWeight.semiBold,
  },
});

export default LandingScreen;
