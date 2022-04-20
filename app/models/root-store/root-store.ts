import { Instance, SnapshotOut, types } from 'mobx-state-tree';
import { GoalDefinitionStoreModel } from '../goal-definition-store/goal-definition-store';
import { GoalStoreModel } from '../goal-store/goal-store';

/**
 * A RootStore model.
 */
export const RootStoreModel = types
    .model('RootStore')
    .props({
        goalDefinitionStore: types.optional(GoalDefinitionStoreModel, {} as any),
        goals: types.optional(GoalStoreModel, {} as any),
    });

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> { };

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> { };
