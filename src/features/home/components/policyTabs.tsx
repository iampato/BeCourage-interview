import {ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveRadius,
} from '../../../core/sizes';
import useTheme from '../../../core/theme';
import FaIcon from 'react-native-vector-icons/FontAwesome';

interface HomeTabs {
  title: string;
  icon: string;
}
const tabs = [
  {
    title: 'All',
    icon: 'filter',
  },
  {
    title: 'Health',
    icon: 'hospital-o',
  },
  {
    title: 'Car',
    icon: 'car',
  },
  {
    title: 'Electronics',
    icon: 'laptop',
  },
  {
    title: 'Travel',
    icon: 'briefcase',
  },
  {
    title: 'Life',
    icon: 'heartbeat',
  },
];

interface PolicyTabsProps {
  tabIndex: number;
  onTabChanged: (tab: number) => void;
}

export const PolicyTabs = ({tabIndex, onTabChanged}: PolicyTabsProps) => {
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
      backgroundColor: colors.primary,
    },
    greyBgColor: {
      backgroundColor: colors.grey,
    },
    lightGreyBgColor: {
      backgroundColor: colors.lighterGrey,
    },
  };
  return (
    <ScrollView
      horizontal={true}
      style={styles.tabsContainer}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.tabsContentContainer}>
      {tabs.map((tab: HomeTabs, index: number) => (
        <TouchableOpacity
          key={index}
          onPress={() => onTabChanged(index)}
          style={[
            tabIndex === index
              ? dynamicStyles.primaryBgColor
              : dynamicStyles.lightGreyBgColor,
            styles.chipContainer,
          ]}>
          <FaIcon
            name={tab.icon}
            size={14}
            color={tabIndex === index ? colors.background : colors.text}
            style={styles.chipIcon}
          />
          <Text
            style={
              tabIndex === index
                ? dynamicStyles.whiteTextColor
                : dynamicStyles.blackTextColor
            }>
            {tab.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    // backgroundColor: 'red',
    marginTop: responsiveHeight(8),
    maxHeight: responsiveHeight(35),
  },
  tabsContentContainer: {
    // backgroundColor: 'green',
    height: responsiveHeight(50),
  },
  chipContainer: {
    height: responsiveHeight(15),
    paddingHorizontal: responsiveWidth(20),
    borderRadius: responsiveRadius(50),
    marginRight: responsiveWidth(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  chipIcon: {
    marginRight: responsiveWidth(8),
  },
});
