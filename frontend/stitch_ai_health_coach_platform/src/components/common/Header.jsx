import { Link } from 'react-router-dom';
import { Icon } from './Icon';

export function Header({ title = 'Good morning, Alex', subtitle = "Here's your wellness overview for today", streak = 7 }) {
    return (
        <header className="sticky top-0 z-30 border-b border-outline-variant/20 bg-surface/85 px-4 py-3 backdrop-blur-md sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
                <Link to="/profile" className="flex min-w-0 items-center gap-3 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-primary-fixed bg-primary/10 text-primary">
                        <Icon>person</Icon>
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-primary ring-2 ring-surface-container-lowest" />
                    </div>
                    <div className="min-w-0">
                        <h1 className="truncate font-headline text-base font-bold text-on-surface sm:text-lg">{title}</h1>
                        <p className="truncate font-body text-xs text-on-surface-variant">{subtitle}</p>
                    </div>
                </Link>
                <div className="flex items-center gap-2">
                    <span className="hidden rounded-full border border-secondary-fixed bg-secondary-fixed/50 px-3 py-1 font-body text-[11px] font-bold text-secondary sm:inline-flex">
                        {streak} Day Streak
                    </span>
                    <Link
                        to="/notifications"
                        aria-label="Notifications"
                        className="relative flex h-11 w-11 items-center justify-center rounded-full text-on-surface hover:bg-surface-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        <Icon>notifications</Icon>
                        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-secondary-container" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
