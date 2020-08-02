var fs = require('fs');

// read from a file

fs.readFile('write.txt', function (err, buf) {
  console.log(buf.toString());
});

// fs.readFile('not-found.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });

// writing to a file
