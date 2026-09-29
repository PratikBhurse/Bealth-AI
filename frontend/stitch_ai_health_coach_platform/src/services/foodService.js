import { clone, wait } from '../utils/async';
import { foodLogsSeed, mealPlan, mockScanResult } from '../data/food';

let foodLogs = foodLogsSeed.map((item) => ({ ...item }));
let idCounter = foodLogs.length;

export async function getFoodLogs() {
    await wait();
    return clone(foodLogs);
}

export async function addFoodLog(entry) {
    await wait(80);
    idCounter += 1;
    const item = {
        id: entry.id || `meal-${idCounter}`,
        name: entry.name,
        detail: entry.detail || 'Manually logged',
        calories: Number(entry.calories) || 0,
        protein: Number(entry.protein) || 0,
        carbs: Number(entry.carbs) || 0,
        fat: Number(entry.fat) || 0,
        mealType: entry.mealType || 'Meal',
    };
    foodLogs = [item, ...foodLogs];
    return clone(item);
}

export async function deleteFoodLog(id) {
    await wait(60);
    foodLogs = foodLogs.filter((item) => item.id !== id);
    return true;
}

export async function getMealPlan() {
    await wait();
    return clone(mealPlan);
}

export async function recognizeFood() {
    await wait(900);
    return clone({
        ...mockScanResult,
        estimated: true,
        source: 'mock',
    });
}
