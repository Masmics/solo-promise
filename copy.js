// const fsPromises = require('fs').promises;
// //const encoding = { encoding: 'utf8' };
// function copy(source, dest) {
//   return fsPromises.readFile(source, { encoding: 'utf8' })
//     .then(data => fsPromises.writeFile(dest, data, { encoding: 'utf8' }));
// }

// module.exports = copy;

const fsPromises = require('fs').promises;

module.exports = (src, dst) => {

  fsPromises.readFile(src)
    .then(data => fsPromises.writeFile(dst, data));
  // .then(console.log('copied it!'))
  // .catch(err => console.error(err));
};
