/**
 * Checks the speed of a car against a speed limit and logs demerit points or license suspension.
 * @param {number} speed - The speed of the car in km/h.
 */
function checkSpeed(speed) {
    const speedLimit = 70;  // Define the speed limit in km/h
    let demeritPoints = 0;  // Initialize demerit points to zero

    if (speed <= speedLimit) {
        console.log("Ok");  // Speed is within the limit
    } else {
        demeritPoints = Math.floor((speed - speedLimit) / 5);  // Calculate demerit points
        console.log(`Points: ${demeritPoints}`);  // Output demerit points

        if (demeritPoints > 12) {
            console.log("License suspended");  // Output if demerit points exceed 12
        }
    }
}

// Example usage:
let speed = parseFloat(prompt("Enter the speed of the car (km/h):"));
checkSpeed(speed);
