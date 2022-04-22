import { Instance, SnapshotOut, types } from 'mobx-state-tree';

export const GoalDefinitionModel = types
    .model('GoalDefinitionModel')
    .props({
        id: types.identifier,
        name: types.string,
        description: types.string,
    });

type GoalDefinitionType = Instance<typeof GoalDefinitionModel>;
export interface GoalDefinition extends GoalDefinitionType { };

type GoalDefinitionSnapshotType = SnapshotOut<typeof GoalDefinitionModel>;
export interface GoalDefinitionSnapshot extends GoalDefinitionSnapshotType { };
