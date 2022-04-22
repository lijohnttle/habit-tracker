import { GoalActionStoreModel } from './goal-action-store';

test("can be created", () => {
    const instance = GoalActionStoreModel.create({});

    expect(instance).toBeTruthy();
});
