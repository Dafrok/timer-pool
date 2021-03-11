/**
 * @file timer pool
 * @author Dafrok
 */

const pool = {
    timeout: {},
    interval: {}
};

function createSetTimerFn(fn, name) {
    return function setTimer(...args) {
        let [groupName, handler, timeout] = args;
        if (args.length === 2) {
            groupName = '';
            [handler, timeout] = args;
        }
        const group = groupName.toString();
        const id = fn(handler, timeout);
        pool[name][group] = pool[name][group] || [];
        pool[name][group].push(id);
        return id;
    };
}

function createClearTimerFn(fn, name) {
    return function (...args) {
        if (typeof args[0] === 'number') {
            return fn(args[0]);
        }
        if (typeof args[0] === 'string') {
            const group = pool[name][args[0]];
            if (!group) {
                return;
            }
            while (group.length) {
                fn(group.pop());
            }
        }
    };
}

export const setTimer = createSetTimerFn(setTimeout, 'timeout');
export const setLoopTimer = createSetTimerFn(setInterval, 'interval');
export const clearTimer  = createClearTimerFn(clearTimeout, 'timeout');
export const clearLoopTimer = createClearTimerFn(clearInterval, 'interval');
