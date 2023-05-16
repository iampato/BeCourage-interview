import * as React from 'react';
import Stepper from 'react-native-stepper-ui';
import BecourageScaffold from '../../../components/becourageScaffold';
import {useState} from 'react';
import QuatationType from '../components/quotationType';
import QuatationForm from '../components/quotationForm';
import {navigationRef} from '../../../app/rootNavigation';
import {Image, StyleSheet, Text, View} from 'react-native';
import {appConstants} from '../../../core/constants';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveRadius,
} from '../../../core/sizes';
import TextTopography, {TextFontWeight} from '../../../core/textTopography';
import useTheme from '../../../core/theme';

const AddQuatationScreen = () => {
  const [active, setActive] = useState(0);
  const [type, setType] = useState(1);
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
    <BecourageScaffold containerStyle={styles.container}>
      <View style={styles.userSectionContainer}>
        <View style={styles.userSectionDetails}>
          <Text style={[dynamicStyles.blackTextColor, styles.userSectionName]}>
            {appConstants.appName}
          </Text>
          <Text style={[dynamicStyles.greyTextColor, styles.userSectionAbout]}>
            Add a new quotation, let's get it 💪
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
      <Stepper
        active={active}
        showButton={false}
        stepStyle={{
          backgroundColor: active === 1 ? colors.primary : colors.grey,
        }}
        wrapperStyle={styles.stepperWrapper}
        content={[
          <QuatationType
            onNext={(type: number) => {
              setType(type);
              setActive(1);
            }}
          />,
          <QuatationForm
            type={type}
            onNext={() => {
              if (navigationRef.canGoBack()) {
                navigationRef.goBack();
              }
            }}
            onBack={() => setActive(p => p - 1)}
          />,
        ]}
        onBack={() => setActive(p => p - 1)}
        onFinish={() => {
          if (navigationRef.canGoBack()) {
            navigationRef.goBack();
          }
        }}
        onNext={() => setActive(p => p + 1)}
      />
    </BecourageScaffold>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(15),
  },
  stepperWrapper: {
    flex: 1,
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
    marginBottom: responsiveHeight(5),
  },
  userSectionDetails: {
    flexDirection: 'column',
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
});
export default AddQuatationScreen;
