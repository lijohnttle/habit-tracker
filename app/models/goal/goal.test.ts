import { GoalDefinitionModel } from '../goal-definition/goal-definition';
import { GoalModel } from './goal';

test('can be created', () => {
    const instance = GoalModel.create({
        id: '1',
        status: 'PENDING',
    })

    expect(instance).toBeTruthy()
});
