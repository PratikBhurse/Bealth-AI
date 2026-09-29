import { clone, wait } from '../utils/async';
import { progressData } from '../data/progress';
import { notifications } from '../data/notifications';

export async function getProgressData() {
    await wait();
    return clone(progressData);
}

export async function getNotifications() {
    await wait();
    return clone(notifications);
}
