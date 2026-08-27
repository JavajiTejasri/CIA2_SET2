// Task 8

function checkTimeLeftCallback(seconds, callback) {
    setTimeout(() => {
        callback(seconds);
    }, 1000);
}

checkTimeLeftCallback(10, (timeLeft) => {
    console.log("Time Left:", timeLeft);
});