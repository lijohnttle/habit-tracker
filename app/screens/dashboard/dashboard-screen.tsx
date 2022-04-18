import React, { FC } from 'react';
import { View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigatorParamList, useBackButtonHandler } from '../../navigators';
import { styles } from './dashboard-screen.styles';
import { Header, Screen } from '../../components';
import { color } from '../../theme';


export const DashboardScreen: FC<StackScreenProps<NavigatorParamList,'dashboard'>> = ({ navigation }) => {
  useBackButtonHandler(navigation);

  return (
    <View testID="DashboardScreen" style={styles.root}>
      <Screen preset="scroll" backgroundColor={color.transparent}>
        <Header headerTx="dashboardScreen.title" />
      </Screen>
    </View>
  );
};
