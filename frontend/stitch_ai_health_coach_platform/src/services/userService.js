import { clone, wait } from '../utils/async';
import { defaultOnboardingAnswers, mockUser } from '../data/user';

let userProfile = { ...mockUser };
let onboardingAnswers = { ...defaultOnboardingAnswers };

export async function getUserProfile() {
    await wait();
    return clone(userProfile);
}

export async function updateUserProfile(patch) {
    await wait();
    userProfile = { ...userProfile, ...patch };
    return clone(userProfile);
}

export async function getOnboardingAnswers() {
    await wait(40);
    return clone(onboardingAnswers);
}

export async function saveOnboardingAnswers(answers) {
    await wait();
    onboardingAnswers = { ...onboardingAnswers, ...answers };
    userProfile = {
        ...userProfile,
        name: onboardingAnswers.name || userProfile.name,
        age: onboardingAnswers.age ?? userProfile.age,
        height: onboardingAnswers.height ?? userProfile.height,
        weight: onboardingAnswers.weight ?? userProfile.weight,
        goal: onboardingAnswers.goal || userProfile.goal,
        activity: onboardingAnswers.activity || userProfile.activity,
        diet: onboardingAnswers.diet || userProfile.diet,
    };
    return clone(onboardingAnswers);
}
