import { clone, wait } from '../utils/async';
import { fitnessData, workoutHistory, workoutSession } from '../data/fitness';

let history = workoutHistory.map((item) => ({ ...item }));

export async function getFitnessData() {
    await wait();
    return clone(fitnessData);
}

export async function getWorkout() {
    await wait();
    return clone(workoutSession);
}

export async function getWorkoutHistory() {
    await wait();
    return clone(history);
}

export async function completeWorkout(session) {
    await wait(80);
    history = [
        {
            id: `hist-${Date.now()}`,
            title: session?.title || 'Completed session',
            when: 'Just now',
            duration: session?.duration || '25 min',
            calories: session?.calories || 180,
            status: 'Completed',
        },
        ...history,
    ];
    return clone(history);
}
