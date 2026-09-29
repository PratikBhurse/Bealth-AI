import { NavLink } from 'react-router-dom';
import { Icon } from '../common/Icon';

const items = [
    ['/dashboard', 'Today', 'home'],
    ['/food', 'Food log', 'restaurant'],
    ['/fitness', 'Fitness', 'fitness_center'],
    ['/coach', 'AI Coach', 'smart_toy'],
    ['/profile', 'Profile', 'person'],
];

export function Sidebar() {
    return (
        <aside className="fixed bottom-0 left-0 top-0 hidden w-64 border-r border-outline-variant/20 bg-surface px-4 py-6 lg:block">
            <div className="mb-10 flex items-center gap-2 px-3 font-headline text-xl font-bold text-primary">
                <Icon filled>vital_signs</Icon> BealthAI
            </div>
            <nav aria-label="Primary" className="space-y-2">
                {items.map(([to, label, icon]) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) => `flex items-center gap-3 rounded-2xl px-4 py-3 font-body text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${isActive ? 'bg-primary-fixed/40 text-primary' : 'text-on-surface-variant hover:bg-surface-container-low'}`}
                    >
                        <Icon>{icon}</Icon>
                        {label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}
