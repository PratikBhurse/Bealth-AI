import { Icon } from '../common/Icon';

export function AIMessage({ role, children }) {
    const user = role === 'user';
    return (
        <div className={`flex gap-3 ${user ? 'flex-row-reverse' : ''}`}>
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${user ? 'bg-secondary-fixed text-secondary' : 'bg-primary-fixed text-primary'}`}>
                <Icon>{user ? 'person' : 'smart_toy'}</Icon>
            </span>
            <div className={`max-w-[82%] rounded-2xl p-3 font-body text-sm leading-6 ${user ? 'bg-primary-container text-on-primary' : 'bg-surface-container-low text-on-surface'}`}>
                {children}
            </div>
        </div>
    );
}
