export function Card({ children, className = '', as: Tag = 'section' }) {
    return <Tag className={`rounded-3xl border border-primary/10 bg-surface-container-lowest shadow-card ${className}`}>{children}</Tag>;
}

export function Button({ children, variant = 'primary', className = '', ...props }) {
    const styles = variant === 'secondary'
        ? 'bg-primary/10 text-primary hover:bg-primary/15'
        : variant === 'quiet'
            ? 'bg-transparent text-primary hover:bg-surface-container'
            : 'bg-primary-container text-on-primary hover:bg-primary';
    return <button className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 font-body text-sm font-semibold transition active:scale-95 ${styles} ${className}`} {...props}>{children}</button>;
}
