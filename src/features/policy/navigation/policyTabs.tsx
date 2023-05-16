/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {StyleSheet, Text, useWindowDimensions} from 'react-native';
import {
  TabView,
  SceneMap,
  TabBar,
  TabBarIndicator,
} from 'react-native-tab-view';
import useTheme from '../../../core/theme';
import {responsiveHeight, responsiveWidth} from '../../../core/sizes';
import BecourageScaffold from '../../../components/becourageScaffold';
import ClaimsScreen from '../screens/claimsScreen';
import PolicyScreen from '../screens/policyScreen';

const renderScene = SceneMap({
  first: PolicyScreen,
  second: ClaimsScreen,
});

export default function PolicyTabs() {
  const layout = useWindowDimensions();
  const colors = useTheme();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Active Policies'},
    {key: 'second', title: 'My Claims'},
  ]);

  return (
    <BecourageScaffold containerStyle={styles.container}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        style={{
          paddingHorizontal: responsiveWidth(10),
          elevation: 0,
        }}
        pagerStyle={{
          flex: 1,
          width: '100%',
        }}
        renderTabBar={props => (
          <TabBar
            {...props}
            // scrollEnabled={true}
            renderLabel={({route}) => (
              <Text style={{color: colors.text, margin: 8}}>{route.title}</Text>
            )}
            renderIndicator={indicatorProps => {
              return (
                <TabBarIndicator
                  {...indicatorProps}
                  // width={responsiveWidth(100)}
                />
              );
            }}
            indicatorStyle={{
              backgroundColor: colors.primary,
              height: 2,
            }}
            style={{
              backgroundColor: colors.background,
              elevation: 0,
            }}
          />
        )}
      />
    </BecourageScaffold>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: responsiveHeight(5),
  },
});
