import { Icon } from '../common/Icon';
import { Card } from '../common/Card';
import { ProgressBar } from '../common/ProgressBar';

export function MetricCard({ icon, label, value, goal, unit, color = 'primary' }) {
    const percentage = goal ? Math.round((value / goal) * 100) : 0;
    const tones = {
        primary: 'bg-primary/10 text-primary',
        secondary: 'bg-secondary/10 text-secondary',
        tertiary: 'bg-tertiary/10 text-tertiary',
    };
    return (
        <Card className="p-4">
            <div className="mb-3 flex items-center gap-2 text-on-surface-variant">
                <span className={`flex h-8 w-8 items-center justify-center rounded-full ${tones[color] || tones.primary}`}>
                    <Icon className="text-lg">{icon}</Icon>
                </span>
                <span className="font-body text-xs font-bold uppercase tracking-wider">{label}</span>
            </div>
            <div className="mb-2 flex items-baseline gap-1">
                <strong className="font-headline text-2xl text-on-surface">{value}</strong>
                <span className="font-body text-xs text-outline">/ {goal} {unit}</span>
            </div>
            {goal ? <ProgressBar value={percentage} /> : null}
        </Card>
    );
}
