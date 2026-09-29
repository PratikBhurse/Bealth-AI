import { Icon } from './Icon';

export function SelectionCard({ label, detail, icon, selected, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={selected}
            className={`flex w-full items-center gap-3 rounded-2xl border-2 p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${selected ? 'border-primary-container bg-primary-fixed/20' : 'border-outline-variant/40 bg-surface-container-lowest hover:bg-surface-container-low'}`}
        >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon>{icon}</Icon>
            </span>
            <span className="min-w-0 flex-1">
                <strong className="block font-body text-sm text-on-surface">{label}</strong>
                {detail && <small className="mt-0.5 block font-body text-xs text-on-surface-variant">{detail}</small>}
            </span>
            {selected && <Icon className="text-primary-container">check_circle</Icon>}
        </button>
    );
}
