import { log } from '@yton/utils';
import chalk from 'chalk';
import semver from 'semver';

const LOWEST_NODE_VERSION = '14.0.0';

function checkNodeVersion() {
  log.verbose('node version', process.version);
  if (!semver.gte(process.version, LOWEST_NODE_VERSION)) {
    throw new Error(chalk.red(`yton/cli need Node.js version >= ${LOWEST_NODE_VERSION} `));
  }
}

export default checkNodeVersion;
