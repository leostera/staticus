import cli from 'commander';

import tree from './lib/tree';

const staticus = require('./package.json');

let root = process.cwd();

cli
  .version(staticus.version)

cli
  .command('new')
  .action( (env) => {
    let t = tree(root);
    console.log(root);
    console.log(t);
  });

cli.parse(process.argv);
