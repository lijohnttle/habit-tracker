import { GoalStoreModel } from './goal-store';

test('can be created', () => {
    const instance = GoalStoreModel.create({});

    expect(instance).toBeTruthy();
});
