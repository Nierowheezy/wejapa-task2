const fs = require('fs');

const currPath = './my-directory';
const newPath = './new-directory-name';

fs.rename(currPath, newPath, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully renamed the directory.');
  }
});
