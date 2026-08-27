// Task 3
// Methods used from timers module:
// setTimeout()
// setInterval()
// clearInterval()

let count = 5;

const timer = setInterval(() => {
    console.log("Countdown:", count);
    count--;

    if (count < 0) {
        clearInterval(timer);
        console.log("Countdown Complete!");
    }
}, 1000);