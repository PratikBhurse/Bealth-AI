export const foodLogsSeed = [
    { id: 'meal-1', name: 'Herb quinoa bowl', detail: 'Quinoa, greens, tahini', calories: 520, protein: 22, carbs: 58, fat: 18, mealType: 'Lunch' },
    { id: 'meal-2', name: 'Greek yogurt and berries', detail: 'Yogurt, berries, seeds', calories: 280, protein: 18, carbs: 28, fat: 8, mealType: 'Snack' },
];

export const mockScanResult = {
    name: 'Mediterranean Grilled Chicken Rice Bowl',
    confidence: 94,
    confidenceLabel: 'High',
    estimated: true,
    plateVolume: '455g',
    calories: 620,
    protein: 38,
    carbs: 72,
    fat: 18,
    fiber: 6,
    ingredients: [
        { id: 'ing-1', name: 'Herb Brown Rice', amount: '180g', icon: 'grain' },
        { id: 'ing-2', name: 'Grilled Chicken Breast', amount: '150g', icon: 'restaurant' },
        { id: 'ing-3', name: 'Roasted Veggies', amount: '100g', icon: 'eco' },
        { id: 'ing-4', name: 'Tahini Garlic Drizzle', amount: '25g', icon: 'oil_barrel' },
    ],
    disclaimer: 'Nutrition values are informational estimates and may vary based on preparation and portion size. This is not a lab analysis.',
};

export const mealPlan = {
    title: 'This week’s meal outline',
    days: [
        { day: 'Mon', meals: ['Oatmeal bowl', 'Quinoa salad', 'Tofu stir-fry'] },
        { day: 'Tue', meals: ['Yogurt parfait', 'Lentil wrap', 'Salmon or paneer'] },
        { day: 'Wed', meals: ['Veg omelette', 'Rice bowl', 'Vegetable soup'] },
    ],
};
