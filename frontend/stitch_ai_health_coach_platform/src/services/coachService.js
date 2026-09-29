import { clone, wait } from '../utils/async';
import { coachHistorySeed, coachReplies } from '../data/coach';

let history = coachHistorySeed.map((item) => ({ ...item }));
let replyIndex = 0;

export async function getCoachHistory() {
    await wait();
    return clone(history);
}

export async function sendCoachMessage(text) {
    await wait(350);
    const userMessage = { id: `msg-${Date.now()}`, role: 'user', text };
    const reply = coachReplies[replyIndex % coachReplies.length];
    replyIndex += 1;
    const assistantMessage = { id: `msg-${Date.now()}-ai`, role: 'assistant', text: reply };
    history = [...history, userMessage, assistantMessage];
    return clone(history);
}
