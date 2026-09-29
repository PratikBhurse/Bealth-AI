import { Icon } from './Icon';

export function LoadingState({ label = 'Loading wellness data…' }) {
    return (
        <div className="flex items-center gap-3 rounded-2xl bg-surface-container-low p-4" role="status">
            <Icon className="animate-spin text-primary">progress_activity</Icon>
            <p className="font-body text-sm text-on-surface-variant">{label}</p>
        </div>
    );
}

export function EmptyState({ title = 'Nothing here yet', detail, icon = 'inbox' }) {
    return (
        <div className="rounded-2xl border border-dashed border-outline-variant/50 bg-surface-container-lowest p-6 text-center">
            <Icon className="text-3xl text-outline">{icon}</Icon>
            <h3 className="mt-2 font-headline text-base font-bold">{title}</h3>
            {detail && <p className="mt-1 font-body text-sm text-on-surface-variant">{detail}</p>}
        </div>
    );
}

export function ErrorState({ title = 'Something went wrong', detail = 'Please try again.', onRetry }) {
    return (
        <div className="rounded-2xl border border-error/20 bg-error-container/40 p-4" role="alert">
            <h3 className="font-headline text-sm font-bold text-on-surface">{title}</h3>
            <p className="mt-1 font-body text-sm text-on-surface-variant">{detail}</p>
            {onRetry && (
                <button type="button" onClick={onRetry} className="mt-3 font-body text-sm font-bold text-primary underline">
                    Try again
                </button>
            )}
        </div>
    );
}
