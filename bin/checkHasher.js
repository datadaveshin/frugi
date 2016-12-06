"use strict";

var bcrypt = require('bcrypt');
const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
const myPlaintextPassword = "youreawizard";

var hashed = "";

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
        console.log("hash", hash)
        hashed = hash;
        bcrypt.compare(myPlaintextPassword, hashed, function(err, res) {
            // res == true
            console.log("hashed in other place", hashed);
            console.log("should be true", res)
        });
        bcrypt.compare(someOtherPlaintextPassword, hashed, function(err, res) {
            // res == false
            console.log("should be false", res)
        });
    });
});

var i = 0
while (i < 100000) {
    let v = i + i;
    i++
}

bcrypt.compare(myPlaintextPassword, hashed, function(err, res) {
    // res == true
    console.log("hashed in other place", hashed);
    console.log("should be true", res)
});
bcrypt.compare(someOtherPlaintextPassword, hashed, function(err, res) {
    // res == false
    console.log("should be false", res)
});

console.log("the length");
console.log("$2a$10$eElhUd2tCrl0m/958vnMY.WE5meMOi4zemDQsxmjq16iF4QhBmxMy".length);
