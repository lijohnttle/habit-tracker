import { Instance, SnapshotOut, types } from 'mobx-state-tree';
import { GoalDefinitionModel } from '../goal-definition/goal-definition';

export const GoalModel = types
    .model('GoalModel')
    .props({
        id: types.identifier,
        definition: types.reference(GoalDefinitionModel),
        status: types.enumeration('Status', ['PENDING', 'COMPLETE']),
    });

type GoalType = Instance<typeof GoalModel>;
export interface Goal extends GoalType { };

type GoalSnapshotType = SnapshotOut<typeof GoalModel>;
export interface GoalSnapshot extends GoalSnapshotType { };
