import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigatorParamList, useBackButtonHandler } from '../../navigators';
import { styles } from './dashboard-screen.styles';
import { Header, Screen, Text } from '../../components';
import { color } from '../../theme';
import data from './fakeData.json';
import { GoalsList } from './goals-list';

const fakeGoals = data.goalDefinitions.map((d, i) => ({
    definition: d,
    status: 'pending',
}));

const Tab = createMaterialTopTabNavigator();

export const DashboardScreen: FC<StackScreenProps<NavigatorParamList,'dashboard'>> = ({ navigation }) => {
    const [selectedGoalId, setSelectedGoalId] = useState<string>(null);
    useBackButtonHandler(navigation);

    return (
        <View testID="DashboardScreen" style={styles.root}>
            <Screen preset="fixed" backgroundColor={color.transparent}>
                <Header headerTx="dashboardScreen.title" />

                <Tab.Navigator
                    tabBarPosition="top"
                    sceneContainerStyle={styles.goalsContainer}
                    screenOptions={{
                        tabBarIndicatorStyle: { backgroundColor: 'transparent' },
                        tabBarActiveTintColor: color.text,
                        tabBarInactiveTintColor: color.dim,
                        tabBarStyle: {
                            backgroundColor: 'transparent',
                        },
                    }}>
                    <Tab.Screen name="PENDING">
                        {() => <GoalsList goals={fakeGoals} selectedGoalId={selectedGoalId} onSelectionChanged={(goalId) => setSelectedGoalId(goalId)} />}
                    </Tab.Screen>
                    <Tab.Screen name="COMPLETE">
                        {() => <GoalsList goals={[]} selectedGoalId={selectedGoalId} onSelectionChanged={(goalId) => setSelectedGoalId(goalId)} />}
                    </Tab.Screen>
                </Tab.Navigator>
            </Screen>
        </View>
    );
};
