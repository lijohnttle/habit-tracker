import { Instance, SnapshotOut, types } from 'mobx-state-tree';
import { withEnvironment } from '../extensions/with-environment';
import { GoalModel } from '../goal/goal';

export const GoalStoreModel = types
    .model('GoalStoreModel')
    .props({
        goals: types.optional(types.array(GoalModel), [])
    })
    .extend(withEnvironment);

type GoalStoreType = Instance<typeof GoalStoreModel>;
export interface GoalStore extends GoalStoreType { };

type GoalStoreSnapshotType = SnapshotOut<typeof GoalStoreModel>;
export interface GoalStoreSnapshot extends GoalStoreSnapshotType { };
