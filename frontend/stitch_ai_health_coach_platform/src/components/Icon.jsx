export function Icon({ children, filled = false, className = '' }) {
    return <span className={`material-symbols-outlined ${filled ? 'material-symbols-fill' : ''} ${className}`}>{children}</span>;
}
