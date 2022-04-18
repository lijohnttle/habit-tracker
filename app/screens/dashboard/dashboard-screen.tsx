import React, { FC } from 'react';
import { View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigatorParamList } from '../../navigators';
import { styles } from './dashboard-screen.styles';
import { Screen } from '../../components';
import { color } from '../../theme';


export const DashboardScreen: FC<StackScreenProps<NavigatorParamList,'dashboard'>> = ({ navigation }) => {
  return (
    <View testID="DashboardScreen" style={styles.root}>
      <Screen preset="scroll" backgroundColor={color.transparent}>

      </Screen>
    </View>
  );
};
