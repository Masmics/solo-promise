const transform = require('./transform');

describe('transform function', () => {
  it('reads a file and transforms it', () => {
    return transform('./demoFile.md');
  });
});

// const transform = require('./transform.js');

// describe('transform the text of a file', () => {
//   it('removes all capital letters, then uppercases all, then reverses the string', () => {
//     return transform('./transform.txt')
//       .then(data => {
//         expect(data).toEqual('BAL YAR A I SIH');
//       });
//   });
// });
