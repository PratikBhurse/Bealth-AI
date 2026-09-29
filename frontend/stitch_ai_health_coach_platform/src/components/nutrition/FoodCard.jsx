import { Icon } from '../common/Icon';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

export function FoodCard({ meal, onDelete }) {
    return (
        <Card className="flex items-center gap-4 p-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary-fixed/50 text-secondary">
                <Icon>restaurant</Icon>
            </span>
            <div className="min-w-0 flex-1">
                <strong className="block font-body text-sm">{meal.name}</strong>
                <span className="font-body text-xs text-on-surface-variant">{meal.detail}</span>
            </div>
            <div className="text-right">
                <strong className="block font-headline text-sm">{meal.calories} kcal</strong>
                <span className="font-body text-xs text-outline">{meal.protein}g protein</span>
            </div>
            {onDelete && (
                <button type="button" aria-label={`Remove ${meal.name}`} onClick={() => onDelete(meal.id)} className="rounded-full p-2 text-outline hover:bg-surface-container">
                    <Icon>close</Icon>
                </button>
            )}
        </Card>
    );
}

export function ManualFoodForm({ onSave, onCancel }) {
    return (
        <form
            className="space-y-3"
            onSubmit={(event) => {
                event.preventDefault();
                const form = new FormData(event.currentTarget);
                onSave({
                    name: form.get('name'),
                    detail: form.get('detail'),
                    calories: form.get('calories'),
                    protein: form.get('protein'),
                    carbs: form.get('carbs'),
                    fat: form.get('fat'),
                    mealType: form.get('mealType'),
                });
            }}
        >
            <label className="block">
                <span className="section-label mb-2 block">Food name</span>
                <input required name="name" className="w-full rounded-xl border border-outline-variant/50 bg-surface-container-low px-4 py-3 outline-none focus:border-primary" />
            </label>
            <label className="block">
                <span className="section-label mb-2 block">Notes</span>
                <input name="detail" placeholder="Ingredients or portion" className="w-full rounded-xl border border-outline-variant/50 bg-surface-container-low px-4 py-3 outline-none focus:border-primary" />
            </label>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[['calories', 'kcal'], ['protein', 'g'], ['carbs', 'g'], ['fat', 'g']].map(([name, unit]) => (
                    <label key={name} className="block">
                        <span className="section-label mb-2 block">{name} ({unit})</span>
                        <input name={name} type="number" min="0" className="w-full rounded-xl border border-outline-variant/50 bg-surface-container-low px-3 py-3 outline-none focus:border-primary" />
                    </label>
                ))}
            </div>
            <label className="block">
                <span className="section-label mb-2 block">Meal</span>
                <select name="mealType" className="w-full rounded-xl border border-outline-variant/50 bg-surface-container-low px-4 py-3 outline-none focus:border-primary">
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Snack</option>
                </select>
            </label>
            <div className="flex gap-2">
                <Button type="button" variant="secondary" className="flex-1" onClick={onCancel}>Cancel</Button>
                <Button type="submit" className="flex-1">Save to log</Button>
            </div>
        </form>
    );
}
