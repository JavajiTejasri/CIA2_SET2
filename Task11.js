// Task 11

function checkTimeLeftPromise(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (seconds < 0) {
                reject("Invalid duration! Seconds cannot be negative.");
            } else {
                resolve(`Time left: ${seconds} seconds`);
            }
        }, 1000);
    });
}

async function runCountdownAsync(seconds) {
    try {
        const result = await checkTimeLeftPromise(seconds);
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}

// Valid duration
runCountdownAsync(10);

// Invalid duration (demonstrates catch block)
runCountdownAsync(-5);