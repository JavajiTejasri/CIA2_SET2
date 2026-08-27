// Task 2
// V8 executes JavaScript code.
// libuv handles asynchronous operations such as timers and I/O.

setTimeout(() => {
    console.log("Timer Finished!");
}, 3000);

console.log("This message prints before the timer fires.");