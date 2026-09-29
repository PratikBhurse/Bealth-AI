export function ProgressBar({ value, className = '' }) {
    return <div className={`h-2 overflow-hidden rounded-full bg-surface-container-high ${className}`}><div className="h-full rounded-full bg-primary-container transition-all duration-500" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} /></div>;
}
