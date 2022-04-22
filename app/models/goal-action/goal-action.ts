import { Instance, SnapshotOut, types } from 'mobx-state-tree';
import { GoalDefinitionModel } from '../goal-definition/goal-definition';

export const GoalActionCode = {
    complete: 'complete',
};

export const GoalActionModel = types
    .model('GoalActionModel')
    .props({
        definition: types.reference(GoalDefinitionModel),
        actionCode: types.enumeration('ActionCode', Object.keys(GoalActionCode)),
        timestamp: types.string,
    })
    .views(self => ({
        get date(): Number {
            return Date.parse(self.timestamp);
        },
    }));

type GoalActionType = Instance<typeof GoalActionModel>;
export interface GoalAction extends GoalActionType { };

type GoalActionSnapshotType = SnapshotOut<typeof GoalActionModel>;
export interface GoalActionSnapshot extends GoalActionSnapshotType { };
