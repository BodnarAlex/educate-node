const os = require('os');

const res = os.platform();
console.log(res);

const my_math = require('./my_muth');
let res2 = my_math.add(3,4);
let res3 = my_math.minus(3,4);
console.log(`Plus:  ${res2}, Minus: ${res3}`);
