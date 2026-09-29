export function Button({ children, variant = 'primary', className = '', type = 'button', ...props }) {
    const styles = variant === 'secondary'
        ? 'bg-primary/10 text-primary hover:bg-primary/15'
        : variant === 'quiet'
            ? 'bg-transparent text-primary hover:bg-surface-container'
            : 'bg-primary-container text-on-primary hover:bg-primary';
    return (
        <button
            type={type}
            className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 font-body text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-95 ${styles} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
