
/**
 * sleeps (pauses execution) for certain time
 * @param {*} ms - time to sleep
 * @example
 * await sleep(3000); // pauses execution for 3sec
 * sleep(3000).then(func); // executes func after 3sec pause
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Wait for condition to be true for desired amount of time (in ms)
 * @param {*} cond - condition to wait for
 * @param {*} ms  - maximum milliseconds to wait
 * @param {*} delay - condition evaluation interval (default - 500ms)
 * @example
 * let result = await waitFor(func, 3000); // wait for func to be true for 3sec; result - condition value (true or false)
 * let result = await waitFor(func, 5000, 1000); // wait for func to be true for 5sec, evaluate func each 1sec
 * waitFor(func, 3000).then((res) => {...}); // execute otherFunc after waiting for func for 3sec; res - condition value (true or false)
 */
function waitFor(cond, ms, delay = 500) {    
    return (async () => {
        let maxIter = ms / delay;

        for(let i = 0; i < maxIter; i++) {
            let res = await cond();
            if (res)
                return true;

            await sleep(delay);
        }

        return false;
    })();    
}

module.exports = { waitFor, sleep }