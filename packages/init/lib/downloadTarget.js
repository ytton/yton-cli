import { log } from '@yton/utils';
import { execaSync } from 'execa';
import { homedir } from 'node:os';
import fse from 'fs-extra';
import path from 'node:path';
import { loading } from '@yton/utils';

export const downloadTarget = async target => {
  const { templateInfo } = target;
  if (!templateInfo) {
    throw new Error('template is not founded');
  }

  const { pkgName } = templateInfo;
  target.cacheDir = path.join(homedir(), '.yton', 'templates');
  log.debug('缓存目录', target.cacheDir);
  fse.ensureDirSync(target.cacheDir);
  const spinner = loading('downloading template ...');
  try {
    execaSync(`npm`, ['install', `${pkgName}@latest`], { cwd: target.cacheDir });
  } catch (error) {
    spinner.fail('download template fail');
    throw error;
  }
  spinner.succeed('download template success');
  target.templateDir = path.join(target.cacheDir, 'node_modules', pkgName, 'template');
  log.debug('模板目录', target.templateDir);
  return target;
};
