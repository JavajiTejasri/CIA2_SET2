// Task 10

function checkTimeLeftPromise(seconds) {
    return new Promise((resolve, reject) => {
        if (seconds < 0) {
            reject("Invalid Time");
        } else {
            resolve(`Time Left: ${seconds}`);
        }
    });
}

checkTimeLeftPromise(10)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });