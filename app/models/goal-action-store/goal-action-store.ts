import { Instance, SnapshotOut, types } from 'mobx-state-tree';
import { withEnvironment } from '../extensions/with-environment';
import { GoalAction, GoalActionCode, GoalActionModel, GoalActionSnapshot } from '../goal-action/goal-action';
import { GoalDefinition } from '../goal-definition/goal-definition';

export const GoalActionStoreModel = types
    .model('GoalActionStoreModel')
    .props({
        goalActions: types.optional(types.array(GoalActionModel), []),
    })
    .extend(withEnvironment)
    .actions(self => ({
        addAction: (goalAction: GoalActionSnapshot) => {
            self.goalActions.push(goalAction);
        },
        removeAction: (goalAction: GoalAction) => {
            self.goalActions.remove(goalAction);
        },
        clear: () => {
            self.goalActions.clear();
        },
    }))
    .actions(self => ({
        completeGoal: (goalDefinition: GoalDefinition) => {
            self.addAction({
                definition: goalDefinition.id,
                actionCode: GoalActionCode.complete,
                timestamp: new Date().toISOString(),
            });
        },
    }));

type GoalActionStoreType = Instance<typeof GoalActionStoreModel>;
export interface GoalActionStore extends GoalActionStoreType { };

type GoalActionStoreSnapshotType = SnapshotOut<typeof GoalActionStoreModel>;
export interface GoalActionStoreSnapshot extends GoalActionStoreSnapshotType { };
