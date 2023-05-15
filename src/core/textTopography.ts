import {StyleSheet} from 'react-native';
import {responsiveFontSize} from './sizes';

export const TextFontWeight = StyleSheet.create({
  // Text typography for headings
  light: {
    fontFamily: 'OpenSans-Light',
  },
  medium: {
    fontFamily: 'OpenSans-Medium',
  },
  regular: {
    fontFamily: 'OpenSans-Regular',
  },
  semiBold: {
    fontFamily: 'OpenSans-SemiBold',
  },
  bold: {
    fontFamily: 'OpenSans-Bold',
  },
  extrabold: {
    fontFamily: 'OpenSans-ExtraBold',
  },
});

const TextTopography = StyleSheet.create({
  // Text typography for headings
  heading1Medium: {
    fontSize: responsiveFontSize(24),
    // fontWeight: 'bold',
    fontFamily: 'OpenSans-Medium',
    lineHeight: 32,
  },
  heading1bold: {
    fontSize: responsiveFontSize(24),
    // fontWeight: 'bold',
    fontFamily: 'OpenSans-Bold',
    lineHeight: 32,
  },
  heading1Extrabold: {
    fontSize: responsiveFontSize(24),
    // fontWeight: 'bold',
    fontFamily: 'OpenSans-ExtraBold',
    lineHeight: 32,
  },
  heading2: {
    fontSize: responsiveFontSize(20),
    // fontWeight: 'bold',
    fontFamily: 'OpenSans-Regular',
    lineHeight: 28,
  },
  heading3: {
    fontSize: responsiveFontSize(16),
    // fontWeight: 'bold',
    fontFamily: 'Nunito',
    lineHeight: 24,
  },
  heading4: {
    fontSize: responsiveFontSize(14),
    // fontWeight: 'bold',
    fontFamily: 'OpenSans-Bold',
    lineHeight: 24,
  },

  // Text typography for body text
  body1: {
    fontSize: responsiveFontSize(16),
    fontFamily: 'OpenSans-Regular',
    lineHeight: 24,
  },
  body2: {
    fontSize: responsiveFontSize(14),
    fontFamily: 'OpenSans-Regular',
    lineHeight: 22,
  },
  body3: {
    fontSize: responsiveFontSize(11),
    fontFamily: 'OpenSans-Regular',
    lineHeight: 20,
  },
  body4: {
    fontSize: responsiveFontSize(10),
    fontFamily: 'OpenSans-Regular',
  },
  body5: {
    fontSize: responsiveFontSize(9),
    fontFamily: 'OpenSans-Regular',
  },

  // Text typography for captions
  caption: {
    fontSize: responsiveFontSize(10),
    fontFamily: 'OpenSans-Light',
    lineHeight: 16,
  },
  subtitle: {
    fontSize: responsiveFontSize(14),
    fontFamily: 'Nunito',
    lineHeight: 20,
  },

  // button text
  buttonText: {
    fontSize: responsiveFontSize(12),
    fontFamily: 'OpenSans-Bold',
    lineHeight: 24,
  },
});

export default TextTopography;
