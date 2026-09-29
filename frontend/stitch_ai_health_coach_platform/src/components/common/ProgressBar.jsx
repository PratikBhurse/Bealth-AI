export function ProgressBar({ value, className = '', colorClass = 'bg-primary-container' }) {
    return (
        <div className={`h-2 overflow-hidden rounded-full bg-surface-container-high ${className}`} role="progressbar" aria-valuenow={Math.round(value)} aria-valuemin={0} aria-valuemax={100}>
            <div className={`h-full rounded-full transition-all duration-500 ${colorClass}`} style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
        </div>
    );
}
