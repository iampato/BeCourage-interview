import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useTheme from '../../../core/theme';
import Svg, {Path} from 'react-native-svg';
import {
  responsiveHeight,
  responsiveRadius,
  responsiveWidth,
} from '../../../core/sizes';
import OctIcon from 'react-native-vector-icons/Octicons';
import RaisedButton from '../../../components/raisedButton';
import BecourageTextInput from '../../../components/becourageInput';
import TextTopography, {TextFontWeight} from '../../../core/textTopography';
import {navigate} from '../../../app/rootNavigation';
import {AuthenticationScreens} from '../navigation/authenticationNavigation';

const LoginScreen = () => {
  const colors = useTheme();
  const dynamicStyles = {
    containerColor: {
      backgroundColor: colors.primary,
    },
    userContainerColor: {
      backgroundColor: colors.secondary,
    },
    contentColor: {
      backgroundColor: colors.background,
    },
    coloredText: {
      color: colors.secondary,
    },
    subTitleColor: {
      color: colors.text,
    },
    mutedTextColor: {
      color: colors.grey,
    },
  };

  // handlers
  const handleForgotPassword = () => {
    navigate(AuthenticationScreens.ForgotPassword, {});
  };
  const handleSignup = () => {
    navigate(AuthenticationScreens.Register, {});
  };

  return (
    <View style={[dynamicStyles.containerColor, styles.container]}>
      <Svg style={styles.waveContainer} viewBox="0 0 1440 480">
        <Path
          fill="#1f9344"
          fill-opacity="1"
          d="M0,224L60,234.7C120,245,240,267,360,240C480,213,600,139,720,133.3C840,128,960,192,1080,208C1200,224,1320,192,1380,176L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </Svg>
      <View style={[dynamicStyles.contentColor, styles.contentContainer]}>
        <Text style={[dynamicStyles.coloredText, styles.headerText]}>
          Let's Sign You In
        </Text>
        <Text style={[dynamicStyles.subTitleColor, styles.subtitleText]}>
          Welcome back, you've been missed!
        </Text>
        <Text
          style={[
            dynamicStyles.subTitleColor,
            styles.labelText,
            styles.spacer1,
          ]}>
          Phone Number{' '}
          <Text style={[dynamicStyles.mutedTextColor, styles.mutedText]}>
            (Mpesa or Airtel money number)
          </Text>
        </Text>
        <BecourageTextInput
          prefix={<OctIcon name="device-mobile" />}
          placeholder="(+254) 123 456 789"
        />
        <Text
          style={[
            dynamicStyles.subTitleColor,
            styles.labelText,
            styles.spacer2,
          ]}>
          Password
        </Text>
        <BecourageTextInput
          prefix={<OctIcon name="lock" />}
          placeholder="********"
        />

        <RaisedButton
          title="Sign In"
          buttonStyle={styles.loginBtnStyle}
          textStyle={styles.loginTxtStyle}
        />

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={[dynamicStyles.coloredText, styles.forgotPasswordStyle]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignup}>
          <Text style={[dynamicStyles.coloredText, styles.registerTxtStyle]}>
            Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[dynamicStyles.userContainerColor, styles.userContainer]}>
        <OctIcon name="person" style={styles.userAvator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  waveContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: responsiveHeight(63),
  },
  userContainer: {
    position: 'absolute',
    top: responsiveHeight(63) * 0.7,
    left: '50%', // TODO: '50%' is not working, it should be '50% - width/2
    transform: [{translateX: -responsiveHeight(63) * 0.5 * 0.5}],
    borderRadius: responsiveRadius(100),
    height: responsiveHeight(63) * 0.65,
    width: responsiveHeight(63) * 0.65,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 5,
  },
  userAvator: {
    marginTop: responsiveHeight(63) * 0.13,
    fontSize: responsiveHeight(63) * 0.47,
    color: '#fff',
  },
  contentContainer: {
    position: 'absolute',
    top: responsiveHeight(63),
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderTopLeftRadius: responsiveRadius(25),
    borderTopRightRadius: responsiveRadius(25),
    paddingHorizontal: responsiveWidth(27),
  },
  headerText: {
    ...TextTopography.heading3,
    ...TextFontWeight.bold,
    textAlign: 'center',
    marginTop: responsiveHeight(35),
  },
  subtitleText: {
    textAlign: 'center',
    ...TextFontWeight.bold,
    marginTop: responsiveHeight(4),
  },
  spacer1: {
    marginTop: responsiveHeight(25),
  },
  spacer2: {
    marginTop: responsiveHeight(3),
  },
  labelText: {
    ...TextTopography.body3,
    ...TextFontWeight.bold,

    marginBottom: responsiveHeight(4),
  },
  mutedText: {
    ...TextTopography.body5,
    ...TextFontWeight.medium,
  },
  loginTxtStyle: {
    textTransform: 'none',
    ...TextFontWeight.regular,
  },
  loginBtnStyle: {
    marginTop: responsiveHeight(22),
  },
  forgotPasswordStyle: {
    marginTop: responsiveHeight(4),
    textAlign: 'right',
    ...TextTopography.caption,
    ...TextFontWeight.regular,
  },
  registerTxtStyle: {
    marginTop: responsiveHeight(15),
    textAlign: 'center',
    ...TextTopography.buttonText,
    ...TextFontWeight.semiBold,
  },
});

export default LoginScreen;
