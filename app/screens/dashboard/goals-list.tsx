import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from '../../components';
import { styles } from './goals-list.styles';


export const GoalsList = ({ goals, selectedGoalId, onSelectionChanged }) => {
    const pressHandler = (goal) => {
        onSelectionChanged(selectedGoalId === goal.definition.id ? null : goal.definition.id);
    };

    return (
        <ScrollView>
            <View style={styles.itemsContainer}>
                {goals.map(g => (
                    <TouchableOpacity key={g.definition.id} onPress={() => pressHandler(g)}>
                        <View style={[styles.itemRoot, g.definition.id === selectedGoalId ? styles.selected : null]}>
                            <Text text={g.definition.name} />
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};