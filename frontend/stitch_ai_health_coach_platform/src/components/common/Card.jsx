export function Card({ children, className = '', as: Tag = 'section' }) {
    return (
        <Tag className={`rounded-3xl border border-primary/10 bg-surface-container-lowest shadow-card ${className}`}>
            {children}
        </Tag>
    );
}
