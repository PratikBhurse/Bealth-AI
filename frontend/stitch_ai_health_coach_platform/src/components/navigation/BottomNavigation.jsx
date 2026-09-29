import { NavLink } from 'react-router-dom';
import { Icon } from '../common/Icon';

const items = [
    ['/dashboard', 'Today', 'home'],
    ['/food', 'Log', 'document_scanner'],
    ['/fitness', 'Fitness', 'fitness_center'],
    ['/coach', 'Coach', 'smart_toy'],
    ['/profile', 'Profile', 'person'],
];

export function BottomNavigation() {
    return (
        <nav aria-label="Primary" className="fixed bottom-0 left-0 right-0 z-40 border-t border-outline-variant/20 bg-surface/90 px-2 py-2 backdrop-blur-lg lg:hidden">
            <div className="mx-auto flex max-w-lg justify-around">
                {items.map(([to, label, icon]) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) => `flex min-h-12 min-w-14 flex-col items-center justify-center rounded-xl px-2 py-1 font-body text-[10px] font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${isActive ? 'text-primary' : 'text-on-surface-variant'}`}
                    >
                        {({ isActive }) => (
                            <>
                                <Icon filled={isActive}>{icon}</Icon>
                                <span>{label}</span>
                            </>
                        )}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}
