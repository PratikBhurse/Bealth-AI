import { Icon } from './Icon';
import { Card } from './Card';
import { ProgressBar } from './ProgressBar';

export function MetricCard({ icon, label, value, goal, unit, color = 'primary' }) {
    const percentage = goal ? Math.round((value / goal) * 100) : 0;
    return <Card className="p-4">
        <div className="mb-3 flex items-center gap-2 text-on-surface-variant"><span className={`flex h-8 w-8 items-center justify-center rounded-full bg-${color}/10 text-${color}`}><Icon className="text-lg">{icon}</Icon></span><span className="font-body text-xs font-bold uppercase tracking-wider">{label}</span></div>
        <div className="mb-2 flex items-baseline gap-1"><strong className="font-headline text-2xl text-on-surface">{value}</strong><span className="font-body text-xs text-outline">/ {goal} {unit}</span></div>
        {goal && <ProgressBar value={percentage} />}
    </Card>;
}
