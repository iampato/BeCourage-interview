import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveRadius,
  responsiveWidth,
  screenHeight,
  screenWidth,
} from '../../../core/sizes';
import BecourageScaffold from '../../../components/becourageScaffold';
import TextTopography, {TextFontWeight} from '../../../core/textTopography';
import useTheme from '../../../core/theme';
import {appConstants} from '../../../core/constants';
import {LineChart} from 'react-native-chart-kit';
import LinearGradient from 'react-native-linear-gradient';
import GradientButton from '../../../components/gradientButton';

const CommissionScreen = () => {
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
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2, // optional
      },
    ],
  };

  return (
    <BecourageScaffold containerStyle={styles.container}>
      <View style={styles.userSectionContainer}>
        <View style={styles.userSectionDetails}>
          <Text style={[dynamicStyles.blackTextColor, styles.userSectionName]}>
            {appConstants.appName}
          </Text>
          <Text style={[dynamicStyles.greyTextColor, styles.userSectionAbout]}>
            BeCourage points, rewards earned
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
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[colors.secondaryLight, colors.primaryLight]}
        style={[dynamicStyles.primaryBgColor, styles.chartContainer]}>
        <View style={styles.chartRow}>
          <View>
            <Text
              style={[dynamicStyles.lightGreyTextColor, styles.subtitleText]}>
              Total policy reward
            </Text>
            <Text style={[dynamicStyles.whiteTextColor, styles.title]}>
              1290 Points
            </Text>
          </View>
          <Text style={[dynamicStyles.lightGreyTextColor, styles.subtitleText]}>
            +12% from last year
          </Text>
        </View>
        <LineChart
          data={{
            labels: data.labels,
            datasets: data.datasets,
          }}
          yAxisLabel=""
          withHorizontalLabels={false}
          width={screenWidth * 0.95} // from react-native
          height={screenHeight * 0.25}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: colors.primary,
            backgroundGradientFrom: 'transparent',
            backgroundGradientTo: 'transparent',
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            propsForBackgroundLines: {
              // stroke: '#ffffff',
            },
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 111, 199, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
              marginRight: -40,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#fff',
            },
          }}
          bezier={true}
        />
      </LinearGradient>
      <View style={styles.aboutProgramContainer}>
        <Text style={[dynamicStyles.blackTextColor, styles.userSectionName]}>
          BeCourage Reward Program
        </Text>
        <Text>
          BeCourage rewarded for your loyalty and for taking care of your
          health. This is how this program works: {'\n\n'} TODO
        </Text>
      </View>
      <GradientButton
        colors={[colors.primaryLight, colors.secondary]}
        title={'Redeem Points'}
        buttonStyle={styles.actionBtnSpacer}
        onPress={() => {}}
      />
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
  chartContainer: {
    borderRadius: responsiveRadius(12),
    overflow: 'hidden',
    marginTop: responsiveHeight(10),
    paddingVertical: responsiveHeight(5),
  },
  subtitleText: {
    ...TextTopography.body5,
    ...TextFontWeight.medium,
  },
  title: {
    ...TextTopography.heading4,
    ...TextFontWeight.bold,
    marginTop: responsiveHeight(2),
  },
  chartRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(10),
    marginBottom: responsiveHeight(7),
  },
  aboutProgramContainer: {
    flexGrow: 1,
    marginTop: responsiveHeight(7),
  },
  actionBtnSpacer: {
    marginBottom: responsiveHeight(5),
  },
});
export default CommissionScreen;
