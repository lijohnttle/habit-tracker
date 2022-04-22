import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Button, Text } from '../../components';
import { useStores } from '../../models';
import { GoalAction } from '../../models/goal-action/goal-action';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorParamList } from '../../navigators';
import { styles } from './pending-goals-tab.styles';


export type CompleteGoalsTab = {
    completeGoalActions: Array<GoalAction>;
    navigation: StackNavigationProp<NavigatorParamList,'dashboard'>;
};

export const CompleteGoalsTab = observer(({ completeGoalActions, navigation }: CompleteGoalsTab) => {
    const [selectedItemId, setSelectedItemId] = useState<String>(null);
    const { goalActionsStore } = useStores();

    useEffect(() => {
        const unsubscribe = navigation.addListener('state', () => setSelectedItemId(null));

        return unsubscribe;
    }, [navigation]);

    const handleSelect = (goalDefinitionId) => {
        setSelectedItemId(goalDefinitionId !== selectedItemId ? goalDefinitionId : null);
    };

    const handleRevertComplete = () => {
        if (selectedItemId) {
            const selectedGoalAction = completeGoalActions.find(t => t.definition.id === selectedItemId);

            if (selectedGoalAction) {
                goalActionsStore.removeAction(selectedGoalAction);
                setSelectedItemId(null);
            }
        }
    };

    return (
        <View style={styles.root}>
            <ScrollView>
                <View style={styles.itemsContainer}>
                    {completeGoalActions.map(t => (
                        <TouchableOpacity key={t.definition.id} onPress={() => handleSelect(t.definition.id)}>
                            <View style={[styles.itemRoot, t.definition.id === selectedItemId ? styles.selected : null]}>
                                <Text text={t.definition.name} />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            {selectedItemId ? <Button preset="danger" tx="dashboardScreen.reset" onPress={handleRevertComplete} /> : null}
        </View>
    );
});
