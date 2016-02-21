import cli from 'commander'

import bootstrap from './lib/bootstrapper'

const staticus = require('./package.json')

cli
  .version(staticus.version)

cli
  .command('new')
  .action(bootstrap)

cli.parse(process.argv)
