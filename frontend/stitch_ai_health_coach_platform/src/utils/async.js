export function wait(ms = 120) {
    return new Promise((resolve) => {
        window.setTimeout(resolve, ms);
    });
}

export function clone(value) {
    return JSON.parse(JSON.stringify(value));
}
