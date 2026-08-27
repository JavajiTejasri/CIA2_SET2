// Task 9

let seconds = 5;

const interval = setInterval(() => {
    console.log("Remaining:", seconds);
    seconds--;

    if (seconds < 0) {
        clearInterval(interval);
    }
}, 1000);

setTimeout(() => {
    console.log("Time's up!");
}, 6000);