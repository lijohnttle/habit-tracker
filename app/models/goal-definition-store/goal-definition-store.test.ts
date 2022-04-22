import { GoalDefinitionStoreModel } from './goal-definition-store';

test('can be created', () => {
    const instance = GoalDefinitionStoreModel.create({});

    expect(instance).toBeTruthy();
});
