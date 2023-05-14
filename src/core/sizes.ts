import {Dimensions, PixelRatio} from 'react-native';

// device sizes
const {width, height} = Dimensions.get('window');
export const screenWidth = width;
export const screenHeight = height;
const baseWidth = 375; // Base width used for design should be changed according to your design

// device orientation
const getOrientation = (): 'portrait' | 'landscape' => {
  return height > width ? 'portrait' : 'landscape';
};
export const isLandscape = getOrientation() === 'landscape';
export const isPortrait = getOrientation() === 'portrait';

// custom scales
export const scale = Dimensions.get('window').scale;
export const fontScale = Dimensions.get('window').fontScale;

export const px = (size: number) => size * scale;
export const dp = (size: number) => size / scale;
// q: should I use px or dp
// a: use px for width and height
// a: use dp for font size

// responsive font size
// Calculates a responsive font size based on the device's font scale.
// The font scale is a value between 1 and 2 that indicates how much
// larger or smaller the font should be on the device.
export const responsiveFontSize = (size: number) => {
  return px(size * fontScale);
};

// responsive width and height
export const responsiveWidth = (size: number) => {
  const widthRatio = width / baseWidth;
  return PixelRatio.roundToNearestPixel(size * widthRatio);
};
export const responsiveHeight = (size: number) => {
  const heightRatio = height / baseWidth;
  return PixelRatio.roundToNearestPixel(size * heightRatio);
};

// example of usage
/*
 container: {
    width: responsiveWidth(100),
    height: responsiveHeight(200),
  },
  text: {
    fontSize: responsiveFontSize(16),
  },
*/
