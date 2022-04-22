import React, { useEffect, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react-lite';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Button, Text } from '../../components';
import { useStores } from '../../models';
import { GoalDefinition } from '../../models/goal-definition/goal-definition';
import { NavigatorParamList } from '../../navigators';
import { styles } from './pending-goals-tab.styles';


export type PendingGoalsTabProps = {
    pendingGoalDefinitions: Array<GoalDefinition>;
    navigation: StackNavigationProp<NavigatorParamList, 'dashboard'>;
};

export const PendingGoalsTab = observer(({ pendingGoalDefinitions, navigation }: PendingGoalsTabProps) => {
    const [selectedItemId, setSelectedItemId] = useState<String>(null);
    const { goalActionsStore } = useStores();

    useEffect(() => {
        const unsubscribe = navigation.addListener('state', () => setSelectedItemId(null));

        return unsubscribe;
    }, [navigation]);

    const handleSelect = (goalDefinitionId) => {
        setSelectedItemId(goalDefinitionId !== selectedItemId ? goalDefinitionId : null);
    };

    const handleComplete = () => {
        if (selectedItemId) {
            const selectedGoalDefinition = pendingGoalDefinitions.find(t => t.id === selectedItemId);

            if (selectedGoalDefinition) {
                goalActionsStore.completeGoal(selectedGoalDefinition);
                setSelectedItemId(null);
            }
        }
    };

    return (
        <View style={styles.root}>
            <ScrollView>
                <View style={styles.itemsContainer}>
                    {pendingGoalDefinitions.map(t => (
                        <TouchableOpacity key={t.id} onPress={() => handleSelect(t.id)}>
                            <View style={[styles.itemRoot, t.id === selectedItemId ? styles.selected : null]}>
                                <Text text={t.name} />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            {selectedItemId ? <Button preset="primary" tx="dashboardScreen.complete" onPress={handleComplete} /> : null}
        </View>
    );
});
