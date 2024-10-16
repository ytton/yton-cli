import { log, makeInput, makeList } from '@yton/utils';
import { getTarget } from './lib/getTarget.js';
import { downloadTarget } from './lib/downloadTarget.js';
import { copyTarget } from './lib/copyTarget.js';

/**
 * @param {import('commander').Command} command
 */
export const registryInitCommand = command => {
  command
    .command('init [name]')
    .description('init a new project or add a page')
    .option('-n, --name <name>')
    .option('-f, --force')
    .option('-p, --page', 'add a page')
    .option('-pj, --project', 'add a project')
    .option('-t, --template <template>', 'project/page template')
    .action(async (name, options) => {
      const target = await getTarget({
        name: name || options.name,
        type: ['page', 'project'].find(key => options[key] === true),
        template: options.template
      });
      log.debug('target', target);
      await downloadTarget(target);
      await copyTarget(target, options);
      console.log('\n');
      console.log('Now, you can run the following command:')
      console.log(`  cd ${name}`);
      console.log(`  npm i`);
      console.log(`  npm run dev`);
    });
};

export default registryInitCommand;
