export const fitnessData = {
    todayActivity: {
        steps: 6842,
        stepGoal: 8000,
        activeMinutes: 42,
        activeGoal: 60,
        energy: 284,
        workoutsDone: 1,
    },
    today: {
        id: 'workout-foundation',
        title: 'Full Body Functional Strength',
        duration: '25 min',
        intensity: 'Moderate',
        exercises: 8,
        calories: 180,
        equipment: 'No Equipment',
        note: 'Designed around your current consistency goal and a 30-minute evening recovery window.',
    },
    week: {
        completed: 4,
        planned: 5,
        bars: [80, 65, 92, 50, 15, 15, 15],
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        activeIndex: 2,
        activeTime: '186 mins',
        totalSteps: '42,850',
        calories: '1,420 kcal',
    },
    recommendations: [
        { id: 'rec-cardio', title: 'Quick Cardio Burn', category: 'Cardio', detail: '6 exercises • No Equipment', duration: '15 min', intensity: 'High', icon: 'directions_run' },
        { id: 'rec-mobility', title: 'Core & Spine Mobility', category: 'Mobility', detail: '7 exercises • Mat required', duration: '20 min', intensity: 'Gentle', icon: 'self_improvement' },
        { id: 'rec-strength', title: 'Home Beginner Strength', category: 'Strength', detail: '10 exercises • Bodyweight', duration: '30 min', intensity: 'Easy', icon: 'fitness_center' },
    ],
    categories: [
        { id: 'strength', label: 'Strength', icon: 'fitness_center', tone: 'primary' },
        { id: 'cardio', label: 'Cardio', icon: 'directions_run', tone: 'secondary' },
        { id: 'mobility', label: 'Mobility', icon: 'self_improvement', tone: 'tertiary' },
        { id: 'hiit', label: 'HIIT', icon: 'timer', tone: 'error' },
        { id: 'lower', label: 'Lower Body', icon: 'stairs', tone: 'muted' },
        { id: 'core', label: 'Core', icon: 'shield', tone: 'primary' },
        { id: 'yoga', label: 'Yoga', icon: 'spa', tone: 'secondary' },
        { id: 'stretch', label: 'Stretching', icon: 'accessibility_new', tone: 'tertiary' },
    ],
};

export const workoutSession = {
    id: 'workout-foundation',
    title: 'Full Body Functional Core & Strength',
    duration: '28 min',
    intensity: 'Moderate Intensity',
    calories: 340,
    equipment: 'No Equipment Needed',
    summary: 'Session focused on muscle recovery and posture support following your morning walk.',
    exercises: [
        { id: 'ex-1', name: 'Warm-up March', cue: 'Keep a tall spine and swing arms naturally.', sets: 1, reps: 20, rest: 20, workSeconds: 40, muscles: 'Full body' },
        { id: 'ex-2', name: 'Glute Activation', cue: 'Squeeze at the top, avoid arching the low back.', sets: 2, reps: 12, rest: 25, workSeconds: 45, muscles: 'Glutes' },
        { id: 'ex-3', name: 'Bodyweight Tempo Squats', cue: 'Keep chest elevated, knees tracking over toes.', sets: 3, reps: 15, rest: 30, workSeconds: 45, muscles: 'Quads, Glutes' },
        { id: 'ex-4', name: 'Push-ups', cue: 'Elbows about 45 degrees from the torso.', sets: 3, reps: 12, rest: 30, workSeconds: 40, muscles: 'Chest, Triceps' },
        { id: 'ex-5', name: 'Plank Hold', cue: 'Ribs down, glutes lightly engaged.', sets: 3, reps: '45s', rest: 25, workSeconds: 45, muscles: 'Core' },
        { id: 'ex-6', name: 'Mountain Climbers', cue: 'Quiet landing, steady breathing.', sets: 3, reps: '30s', rest: 25, workSeconds: 30, muscles: 'Core' },
        { id: 'ex-7', name: 'Glute Bridges', cue: 'Drive through heels, pause at the top.', sets: 3, reps: 15, rest: 25, workSeconds: 40, muscles: 'Posterior chain' },
        { id: 'ex-8', name: 'Cool-down Stretch', cue: 'Breathe slowly and do not force range.', sets: 1, reps: '60s', rest: 0, workSeconds: 60, muscles: 'Full body' },
    ],
};

export const workoutHistory = [
    { id: 'hist-1', title: 'Full Body Strength', when: 'Today', duration: '25 min', calories: 182, status: 'Completed' },
    { id: 'hist-2', title: 'Cardio Walk & Intervals', when: 'Yesterday', duration: '35 min', calories: 210, status: 'Completed' },
];
