const jsdoc2md = require('jsdoc-to-markdown');
const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs').promises;

jsdoc2md
  .render({ files: argv.i })
  .then((output) => {
    fs.writeFile(argv.o, output);
  })
  .catch((e) => console.log(e));
