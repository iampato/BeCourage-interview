import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import BecourageStatusBar from '../components/statusBar';
import useTheme from '../core/theme';
import RootNavigation from './rootNavigation';

function App(): JSX.Element {
  const colors = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <BecourageStatusBar />
      <RootNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
