
"use strict";

let bcrypt = require('bcrypt-as-promised');

let pass1 = "Wilson'sPassword";
let pass2 = "Remus'sPassword";
let pass3 = "Polaris'sPassword";

let hash1;
let hash2;
let hash3;

hash1 = bcrypt.hash(pass1, 12).then((hashed1) => {
    // hash1 = hashed;
    console.log(hashed1);
    return hashed1;
})

hash2 = bcrypt.hash(pass2, 12).then((hashed2) => {
    // hash1 = hashed;
    console.log(hashed2);
    return hashed2;
})

hash3 = bcrypt.hash(pass3, 12).then((hashed3) => {
    // hash1 = hashed;
    console.log(hashed3);
    return hashed3;
})

bcrypt.compare(pass1, hash1)
.then(console.log, console.err)
bcrypt.compare(pass2, hash2)
.then(console.log, console.err)
bcrypt.compare(pass3, hash3)
.then(console.log, console.err)
