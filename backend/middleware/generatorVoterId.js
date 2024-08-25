

function generateUniqueId() {
    const timestamp = Date.now().toString(); // current timestamp in milliseconds
    // Date.now() returns the current time in milliseconds since January 1, 1970 (Unix Epoch).
    // .toString() converts this numeric value into a string so that we can easily manipulate it.
    // For example, if the current timestamp is 1692946823276, timestamp would be the string "1692946823276".


    const randomDigits = Math.floor(Math.random() * 100000).toString().padStart(5, '0'); // random 5 digits
    // Date.now() returns the current time in milliseconds since January 1, 1970 (Unix Epoch).
    // .toString() converts this numeric value into a string so that we can easily manipulate it.
    // For example, if the current timestamp is 1692946823276, timestamp would be the string "1692946823276".

    return timestamp.slice(-5) + randomDigits; // combine them to get a 10-digit ID
    // timestamp.slice(-5) extracts the last 5 digits of the timestamp string.
    // If the timestamp is "1692946823276", timestamp.slice(-5) would result in "23276".
    // + randomDigits concatenates the last 5 digits of the timestamp with the 5-digit random number.
    // For example, if randomDigits is "00238", the final ID would be "2327600238".
}

module.exports=generateUniqueId


// Date.now() returns the current time in milliseconds since January 1, 1970 (Unix Epoch).
// .toString() converts this numeric value into a string so that we can easily manipulate it.
// For example, if the current timestamp is 1692946823276, timestamp would be the string "1692946823276".


// Math.random() generates a floating-point number between 0 (inclusive) and 1 (exclusive).
// Math.random() * 100000 scales this random number to be between 0 and 99,999.
// Math.floor() rounds down to the nearest whole number, so we get an integer between 0 and 99,999.
// .toString() converts this number into a string.
// .padStart(5, '0') ensures that the string is always 5 characters long by padding it with leading zeros if necessary.
// For example, if Math.random() generates 238, this step ensures the string is "00238"


// timestamp.slice(-5) extracts the last 5 digits of the timestamp string.
// If the timestamp is "1692946823276", timestamp.slice(-5) would result in "23276".
// + randomDigits concatenates the last 5 digits of the timestamp with the 5-digit random number.
// For example, if randomDigits is "00238", the final ID would be "2327600238".