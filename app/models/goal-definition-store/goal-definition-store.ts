import { Instance, SnapshotOut, types } from 'mobx-state-tree';
import { withEnvironment } from '../extensions/with-environment';
import { GoalDefinitionModel, GoalDefinitionSnapshot } from '../goal-definition/goal-definition';
import data from './fakeData.json';

export const GoalDefinitionStoreModel = types
    .model('GoalDefinitionStoreModel')
    .props({
        goalDefinitions: types.optional(types.array(GoalDefinitionModel), [])
    })
    .extend(withEnvironment)
    .actions(self => ({
        addGoalDefinitions: (goalDefinitions: GoalDefinitionSnapshot[]) => {
            self.goalDefinitions.push(...goalDefinitions);
        },
        loadGoalDefinitions: () => {
            self.goalDefinitions.replace(data.goalDefinitions.map(t => ({
                id: t.id,
                name: t.name,
                description: t.description
            })));
        },
    }));

type GoalDefinitionStoreType = Instance<typeof GoalDefinitionStoreModel>;
export interface GoalDefinitionStore extends GoalDefinitionStoreType { };

type GoalDefinitionStoreSnapshotType = SnapshotOut<typeof GoalDefinitionStoreModel>;
export interface GoalDefinitionStoreSnapshot extends GoalDefinitionStoreSnapshotType { };
