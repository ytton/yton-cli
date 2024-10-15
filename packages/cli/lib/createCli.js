import { getPkg, log } from '@yton/utils';
import { program } from 'commander';
import { dirname } from 'dirname-filename-esm';
import path from 'node:path';
import checkNodeVersion from './checkNodeVersion.js';

const pkgInfo = getPkg(path.resolve(dirname(import.meta), '../package.json'));

const CLI_NAME = Object.keys(pkgInfo.bin)[0];

const preAction = () => {
  checkNodeVersion();
};

export default function createCli() {
  // 初始化log head
  log.heading = CLI_NAME;
  // 创建项目
  program
    .name(CLI_NAME)
    .version(pkgInfo.version)
    .usage('<command> [options]')
    .option('-d, --debug', 'Enable debug mode', false)
    .hook('preAction', preAction);;

  program.on('option:debug', () => {
    if (program.opts().debug) {
      log.verbose('debug mode enabled');
    }
  });

  program.on('command:*', () => {
    log.error('unknown command:', program.args.join(' '));
  });

  return program;
}
