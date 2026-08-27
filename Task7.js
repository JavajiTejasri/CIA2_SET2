// Task 7

let count = 5;

/*
Bug:
The countdown never reaches zero because count++
increases the value instead of decreasing it.

Fix:
Replace count++ with count--.

Found using debugger/output observation:
The value of count was increasing (5,6,7,8...)
instead of decreasing toward zero.
*/

while (count >= 0) {
    console.log(count);
    count--;   // Fixed statement
}