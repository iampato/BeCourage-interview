import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import useTheme from '../../../core/theme';
import {
  responsiveHeight,
  responsiveRadius,
  responsiveWidth,
} from '../../../core/sizes';
import OutlinedButton from '../../../components/outlinedButton';
import TextTopography, {TextFontWeight} from '../../../core/textTopography';
import {navigate} from '../../../app/rootNavigation';
import {AuthenticationScreens} from '../navigation/authenticationNavigation';
import BecourageScaffold from '../../../components/becourageScaffold';
import GradientButton from '../../../components/gradientButton';

const LandingScreen = () => {
  const colors = useTheme();

  const dynamicStyles = {
    upperContainerColor: {
      backgroundColor: colors.secondary,
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
      <View style={[dynamicStyles.upperContainerColor, styles.upperContainer]}>
        <Text>Upper Container</Text>
        {/* <Image
          source={require('../../../../assets/images/home_bg.png')}
          style={styles.upperImage}
        /> */}
      </View>
      <View style={styles.lowerContainer}>
        <GradientButton
          colors={[colors.primary, colors.secondary]}
          title={'Login'}
          buttonStyle={styles.actionBtnSpacer}
          onPress={handleLoginOnPress}
        />
        <OutlinedButton title={'Register'} onPress={handleRegisterOnPress} />
        <View style={styles.termsContainer}>
          <Text style={[styles.termsText, {color: colors.grey}]}>
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
    flex: 3.5,
    borderBottomLeftRadius: responsiveRadius(20),
    borderBottomRightRadius: responsiveRadius(20),
  },
  upperImage: {
    flex: 3.5,
    position: 'absolute',
    height: '100%',
    width: '100%',
    blend: 'multiply',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderBottomLeftRadius: responsiveRadius(20),
    borderBottomRightRadius: responsiveRadius(20),
  },
  lowerContainer: {
    marginTop: responsiveHeight(15),
    marginHorizontal: responsiveWidth(15),
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: responsiveHeight(5),
  },
  actionBtnSpacer: {
    marginBottom: responsiveHeight(6),
  },
  termsContainer: {
    marginTop: responsiveHeight(10),
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
