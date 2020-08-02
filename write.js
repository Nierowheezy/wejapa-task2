var fs = require('fs');

var data = 'New File Contents Appended here.............';

fs.writeFile('write.txt', data, (err) => {
  if (err) console.log(err);
  console.log('Successfully Written to File.');
});
