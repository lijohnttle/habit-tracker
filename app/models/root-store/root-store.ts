import { Instance, SnapshotOut, types } from 'mobx-state-tree';
import { GoalActionStoreModel } from '../goal-action-store/goal-action-store';
import { GoalDefinitionStoreModel } from '../goal-definition-store/goal-definition-store';
import { GoalStoreModel } from '../goal-store/goal-store';

/**
 * A RootStore model.
 */
export const RootStoreModel = types
    .model('RootStore')
    .props({
        goalDefinitionStore: types.optional(GoalDefinitionStoreModel, {} as any),
        goalsStore: types.optional(GoalStoreModel, {} as any),
        goalActionsStore: types.optional(GoalActionStoreModel, {} as any),
    });

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> { };

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> { };
