import React from 'react';
import {SafeAreaView} from 'react-native';
import BecourageStatusBar from '../components/statusBar';
import useTheme from '../core/theme';
import RootNavigation from './rootNavigation';

function App(): JSX.Element {
  const colors = useTheme();

  return (
    <SafeAreaView style={{backgroundColor: colors.background}}>
      <BecourageStatusBar />
      <RootNavigation />
    </SafeAreaView>
  );
}

export default App;
