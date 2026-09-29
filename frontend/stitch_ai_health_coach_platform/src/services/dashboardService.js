import { clone, wait } from '../utils/async';
import { dashboardData } from '../data/dashboard';

let waterGlasses = dashboardData.nutrition.water.value;

export async function getDashboardData() {
    await wait();
    return clone({
        ...dashboardData,
        nutrition: {
            ...dashboardData.nutrition,
            water: { ...dashboardData.nutrition.water, value: waterGlasses },
        },
    });
}

export async function getTodayNutrition() {
    const data = await getDashboardData();
    return data.nutrition;
}

export async function addWaterGlass() {
    await wait(60);
    const goal = dashboardData.nutrition.water.goal;
    waterGlasses = Math.min(goal, waterGlasses + 1);
    return waterGlasses;
}
