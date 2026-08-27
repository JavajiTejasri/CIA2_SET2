// Task 5

const duration = parseInt(process.argv[2]) || 10;

console.log(`Countdown started for ${duration} seconds`);

process.stdin.setEncoding("utf8");

process.stdin.on("data", (data) => {
    const input = data.trim();

    if (input.toLowerCase() === "cancel") {
        console.log("Countdown Cancelled");
        process.exit();
    }
});