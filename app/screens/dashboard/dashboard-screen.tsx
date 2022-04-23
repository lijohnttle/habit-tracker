import React, { FC, useMemo, useState } from 'react';
import { View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { observer } from 'mobx-react-lite';
import { NavigatorParamList, useBackButtonHandler } from '../../navigators';
import { styles } from './dashboard-screen.styles';
import { Header, Screen } from '../../components';
import { color } from '../../theme';
import { translate } from '../../i18n';
import { useStores } from '../../models';
import { GoalAction, GoalActionCode } from '../../models/goal-action/goal-action';
import { PendingGoalsTab } from './pending-goals-tab';
import { CompleteGoalsTab } from './complete-goals-tab';
import { GoalActionStore } from '../../models/goal-action-store/goal-action-store';
import { GoalDefinitionStore } from '../../models/goal-definition-store/goal-definition-store';
import { GoalDefinition } from '../../models/goal-definition/goal-definition';
import { DrawerScreenProps } from '@react-navigation/drawer';


const getCompleteGoals = (goalActionsStore: GoalActionStore): Array<GoalAction> => {
    const from = new Date();
    from.setHours(0,0,0,0);

    const to = new Date();
    to.setDate(from.getDate() + 1);

    return goalActionsStore
        .goalActions
        .filter(t => {
            const date = t.date;
            return t.actionCode === GoalActionCode.complete &&
                   date >= from.getTime() && date < to.getTime();
        });
};

const getPendingGoals = (completeGoals: GoalAction[], goalDefinitionStore: GoalDefinitionStore): Array<GoalDefinition> => {
    const completeGoalsDefinitions = new Set(completeGoals.map(t => t.definition));

    return goalDefinitionStore
        .goalDefinitions
        .filter(t => !completeGoalsDefinitions.has(t))
};

const Tab = createMaterialTopTabNavigator();

export const DashboardScreen: FC<DrawerScreenProps<NavigatorParamList,'dashboard'>> = observer(({ navigation }) => {
    const { goalDefinitionStore, goalActionsStore } = useStores();
    
    const completeGoals = getCompleteGoals(goalActionsStore);
    const pendingGoals = getPendingGoals(completeGoals, goalDefinitionStore);

    useBackButtonHandler(navigation);

    return (
        <View testID="DashboardScreen" style={styles.root}>
            <Screen preset="fixed" backgroundColor={color.transparent}>
                <Header
                    headerTx="dashboardScreen.title"
                    rightIcon="menu"
                    onRightPress={() => navigation.openDrawer()} />

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
                    <Tab.Screen name={translate("dashboardScreen.pending")}>
                        {() => (
                            <PendingGoalsTab pendingGoalDefinitions={pendingGoals} navigation={navigation} />
                        )}
                    </Tab.Screen>
                    <Tab.Screen name={translate("dashboardScreen.complete")}>
                        {() => (
                            <CompleteGoalsTab completeGoalActions={completeGoals} navigation={navigation} />
                        )}
                    </Tab.Screen>
                </Tab.Navigator>
            </Screen>
        </View>
    );
});
