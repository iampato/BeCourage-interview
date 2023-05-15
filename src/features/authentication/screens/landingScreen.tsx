import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useTheme from '../../../core/theme';
import {
  responsiveHeight,
  responsiveRadius,
  responsiveWidth,
} from '../../../core/sizes';
import RaisedButton from '../../../components/raisedButton';
import OutlinedButton from '../../../components/outlinedButton';
import TextTopography, {TextFontWeight} from '../../../core/textTopography';
import {navigate} from '../../../app/rootNavigation';
import {AuthenticationScreens} from '../navigation/authenticationNavigation';

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
    <View style={styles.container}>
      <View style={[dynamicStyles.upperContainerColor, styles.upperContainer]}>
        <Text>Upper Container</Text>
      </View>
      <View style={styles.lowerContainer}>
        <RaisedButton
          title={'Login'}
          buttonStyle={styles.actionBtnSpacer}
          onPress={handleLoginOnPress}
        />
        <OutlinedButton title={'Register'} onPress={handleRegisterOnPress} />
        <View style={styles.termsContainer}>
          <Text style={[styles.termsText, {color: colors.grey}]}>
            By signing up, you agree to our{' '}
            <Text style={[styles.linkText, {color: colors.secondaryLight}]}>
              Terms and Conditions
            </Text>{' '}
            and{' '}
            <Text style={[styles.linkText, {color: colors.secondaryLight}]}>
              Privacy Policy
            </Text>
            .
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    flex: 3.5,
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
    marginBottom: responsiveHeight(5),
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
