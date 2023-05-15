import React from 'react';
import useTheme from '../core/theme';
import {StyleProp, StyleSheet, View, ViewProps, ViewStyle} from 'react-native';

interface BecourageScaffoldProps extends ViewProps {
  children: React.ReactNode;
  backgroundColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
}
const BecourageScaffold: React.FC<BecourageScaffoldProps> = ({
  children,
  containerStyle,
  // backgroundColor,
  ...props
}) => {
  const colors = useTheme();
  return (
    <View
      style={[
        styles.container,
        containerStyle,
        {backgroundColor: colors.background},
      ]}
      {...props}>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
export default BecourageScaffold;
