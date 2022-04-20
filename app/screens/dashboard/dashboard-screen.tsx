import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { observer } from 'mobx-react-lite';
import { NavigatorParamList, useBackButtonHandler } from '../../navigators';
import { styles } from './dashboard-screen.styles';
import { Button, Header, Screen } from '../../components';
import { color } from '../../theme';
import { GoalsList } from './goals-list';
import { translate } from '../../i18n';
import { useStores } from '../../models';


const Tab = createMaterialTopTabNavigator();

export const DashboardScreen: FC<StackScreenProps<NavigatorParamList,'dashboard'>> = observer(({ navigation }) => {
    const { goalDefinitionStore } = useStores();
    const [goals, setGoals] = useState(goalDefinitionStore.goalDefinitions.map(definition => ({ definition: definition, status: 'pending' })));
    const [selectedGoal, setSelectedGoal] = useState(null);

    useBackButtonHandler(navigation);

    const goalSelectionChangedHandler = (goalId) => {
        if (goalId) {
            const goal = goals.find(g => g.definition.id === goalId);

            if (goal) {
                setSelectedGoal(goal);
            }
            else {
                setSelectedGoal(null);
            }
        }
        else {
            setSelectedGoal(null);
        }
    };

    const updateGoalStatus = (goal,  newGoalStatus) => {
        const goalIndex = goals.indexOf(goal);

        if (goalIndex >= 0) {
            const newGoals = [...goals];
            const changedGoal = { ...newGoals[goalIndex] };
            changedGoal.status = newGoalStatus;
            newGoals[goalIndex] = changedGoal;
            setGoals(newGoals);
            setSelectedGoal(null);
        }
    };

    const completeGoalHandler = () => {
        if (selectedGoal) {
            updateGoalStatus(selectedGoal, "complete");
        }
    };

    const resetGoalHandler = () => {
        if (selectedGoal) {
            updateGoalStatus(selectedGoal, "pending");
        }
    };

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
                    }}
                    screenListeners={() => ({
                        state: (e) => {
                            setSelectedGoal(null);
                        }
                    })}>
                    <Tab.Screen name={translate("dashboardScreen.pending")}>
                        {() => (
                            <GoalsList
                                goals={goals.filter(g => g.status === 'pending')}
                                selectedGoalId={selectedGoal?.definition?.id}
                                onSelectionChanged={goalSelectionChangedHandler} />
                        )}
                    </Tab.Screen>
                    <Tab.Screen name={translate("dashboardScreen.complete")}>
                        {() => (
                            <GoalsList
                                goals={goals.filter(g => g.status === 'complete')}
                                selectedGoalId={selectedGoal?.definition?.id}
                                onSelectionChanged={goalSelectionChangedHandler} />
                        )}
                    </Tab.Screen>
                </Tab.Navigator>
                
                {selectedGoal?.status === "pending" ? <Button preset="primary" tx="dashboardScreen.complete" onPress={completeGoalHandler} /> : null}
                {selectedGoal?.status === "complete" ? <Button preset="danger" tx="dashboardScreen.reset" onPress={resetGoalHandler} /> : null}
            </Screen>
        </View>
    );
});
