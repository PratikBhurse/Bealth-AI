import { useEffect, useState } from 'react';

export function useAsyncData(loader, deps = []) {
    const [status, setStatus] = useState('loading');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let active = true;
        setStatus('loading');
        Promise.resolve()
            .then(loader)
            .then((result) => {
                if (!active) return;
                setData(result);
                setStatus('success');
            })
            .catch((err) => {
                if (!active) return;
                setError(err);
                setStatus('error');
            });
        return () => {
            active = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return { status, data, error, setData };
}
