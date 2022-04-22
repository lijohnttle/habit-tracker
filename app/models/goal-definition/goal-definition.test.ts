import { GoalDefinitionModel } from './goal-definition';

test('can be created', () => {
    const instance = GoalDefinitionModel.create({
        id: '1',
        name: 'Goal 1',
        description: 'Goal 1 Description',
    })

    expect(instance).toBeTruthy()
});
