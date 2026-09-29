import { Link } from 'react-router-dom';
import { Icon } from '../common/Icon';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

export function WorkoutCard({ item }) {
    return (
        <Card className="flex items-center gap-3 p-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-fixed/40 text-primary">
                <Icon>{item.icon || 'fitness_center'}</Icon>
            </span>
            <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                    <span className="rounded bg-secondary-fixed/50 px-1.5 py-0.5 font-body text-[10px] font-bold uppercase text-secondary">{item.category}</span>
                    <span className="font-body text-[11px] text-outline">{item.duration} • {item.intensity}</span>
                </div>
                <strong className="mt-0.5 block truncate font-body text-sm">{item.title}</strong>
                <span className="block truncate font-body text-xs text-outline">{item.detail}</span>
            </div>
            <Link to="/fitness/workout">
                <Button className="px-3 py-1.5">Start</Button>
            </Link>
        </Card>
    );
}
