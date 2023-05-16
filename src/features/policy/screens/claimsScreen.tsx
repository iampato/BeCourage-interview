import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  screenHeight,
} from '../../../core/sizes';
import Lottie from 'lottie-react-native';
import BecourageScaffold from '../../../components/becourageScaffold';
import TextTopography, {TextFontWeight} from '../../../core/textTopography';
import useTheme from '../../../core/theme';
import GradientButton from '../../../components/gradientButton';

const ClaimsScreen = () => {
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
    lightGreyTextColor: {
      color: colors.lightGrey,
    },
  };
  return (
    <BecourageScaffold containerStyle={styles.container}>
      <View style={styles.animationContainer}>
        <Lottie
          style={styles.lottieContainer}
          resizeMode="cover"
          source={require('../../../../assets/lottie/empty.json')}
          autoPlay
          loop={false}
        />
        <Text style={[styles.titleText, dynamicStyles.blackTextColor]}>
          Claims Screen
        </Text>
        <Text style={styles.subTitleText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </Text>
        <GradientButton
          colors={[colors.primaryLight, colors.secondary]}
          title={'Make a Claim'}
          textStyle={{textTransform: 'none'}}
          buttonStyle={styles.actionBtnSpacer}
          onPress={() => {}}
        />
      </View>
    </BecourageScaffold>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    paddingHorizontal: responsiveWidth(15),
  },
  animationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieContainer: {
    height: screenHeight * 0.35,
  },
  titleText: {
    ...TextTopography.body2,
    ...TextFontWeight.bold,
    marginTop: responsiveHeight(10),
  },
  subTitleText: {
    textAlign: 'center',
    marginTop: responsiveHeight(2),
    marginHorizontal: responsiveWidth(10),
  },
  actionBtnSpacer: {
    marginTop: responsiveHeight(10),
    width: '75%',
  },
});
export default ClaimsScreen;
