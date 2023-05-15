import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  responsiveHeight,
  responsiveRadius,
  responsiveWidth,
} from '../../../core/sizes';
import RNListSlider from 'react-native-list-slider';
import useTheme from '../../../core/theme';
import TextTopography, {TextFontWeight} from '../../../core/textTopography';

interface PriceFilterProps {
  value: number;
  onValueChanged: (value: number) => void;
}
export const PriceFilter = ({value, onValueChanged}: PriceFilterProps) => {
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
    <>
      <Text style={[dynamicStyles.blackTextColor, styles.userSectionName]}>
        Customise Your Plan
      </Text>
      <View style={[dynamicStyles.primaryBgColor, styles.rangeContainer]}>
        <View style={styles.rangeRow}>
          <Text style={[dynamicStyles.whiteTextColor, styles.rangeTitle]}>
            Max you are willing to pay
          </Text>
          <Text style={[dynamicStyles.whiteTextColor, styles.rangeValue]}>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'KES',
              useGrouping: true,
            }).format(value)}
          </Text>
        </View>

        <RNListSlider
          value={value}
          arrayLength={1000000}
          onValueChange={onValueChanged}
          multiplicity={1000}
          mainContainerStyle={{
            height: responsiveHeight(20),
            maxHeight: responsiveHeight(20),
            marginTop: responsiveHeight(5),
            backgroundColor: colors.primaryLight,
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          thumbStyle={{
            height: responsiveHeight(18),
            width: 5,
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          itemStyle={{
            height: responsiveHeight(10),
            width: 3,
            marginHorizontal: responsiveWidth(2),
            backgroundColor: colors.grey,
          }}
          tenthItemStyle={{
            // backgroundColor: 'red',
            height: responsiveHeight(15),
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  userSectionName: {
    ...TextTopography.heading5,
    ...TextFontWeight.semiBold,
  },
  userSectionAbout: {
    ...TextTopography.caption,
    ...TextFontWeight.light,
  },

  rangeContainer: {
    borderRadius: responsiveRadius(10),
    paddingHorizontal: responsiveWidth(10),
    paddingVertical: responsiveHeight(5),
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(8),
  },
  rangeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rangeTitle: {
    ...TextFontWeight.medium,
  },
  rangeValue: {
    ...TextTopography.body3,
    ...TextFontWeight.bold,
  },
});
