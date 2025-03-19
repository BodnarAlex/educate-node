const fs = require('fs');

let tres = fs.readFile('some.txt', 'utf-8', (err, data1) => {
  fs.writeFile('some.txt', data1 + '\nSome text', (err, data2 => {
    console.log(`Сработало  ${data1}`);
  }));
});

