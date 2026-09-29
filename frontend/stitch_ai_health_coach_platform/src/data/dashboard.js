export const dashboardData = {
    healthScore: 82,
    recovery: 88,
    sleepEfficiency: 91,
    scoreDelta: 4,
    streak: 7,
    insight: {
        time: '10:45 AM',
        text: 'You have had a protein-light morning. Consider adding eggs, Greek yogurt, or paneer to your next meal to support your protein target.',
    },
    nutrition: {
        calories: { value: 1640, goal: 2200, unit: 'kcal' },
        protein: { value: 118, goal: 150, unit: 'g' },
        carbs: { value: 165, goal: 220, unit: 'g' },
        fat: { value: 48, goal: 65, unit: 'g' },
        water: { value: 5, goal: 8, unit: 'glasses', liters: 1.25, literGoal: 2 },
    },
    activity: {
        steps: 8420,
        stepGoal: 10000,
        activeMinutes: 42,
        burned: 520,
    },
    schedule: [
        { id: 'breakfast', time: '8:15 AM', period: 'Breakfast', title: 'Oatmeal & Chia Bowl', detail: '420 kcal • 18g Protein', icon: 'bakery_dining', status: 'logged' },
        { id: 'lunch', time: '1:15 PM', period: 'Lunch', title: 'Grilled Chicken & Quinoa Salad', detail: '580 kcal • 45g Protein', icon: 'skillet', status: 'logged' },
        { id: 'workout', time: '5:30 PM', period: 'Workout', title: '25-Min HIIT Bodyweight', detail: 'Metabolic conditioning circuit', icon: 'fitness_center', status: 'upcoming', action: 'start' },
        { id: 'dinner', time: '7:45 PM', period: 'Dinner', title: 'Recommended Salmon or Tofu Stir-fry', detail: 'Target ~640 kcal • High micronutrients', icon: 'restaurant', status: 'planned' },
    ],
};
