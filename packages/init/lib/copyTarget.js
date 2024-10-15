import { loading, log } from '@yton/utils';
import fse from 'fs-extra';
import path from 'node:path';
export const copyTarget = async (target, options) => {
  const { outputDir, templateDir, name } = target;
  const { force } = options;
  if (fse.pathExistsSync(outputDir)) {
    if (force) {
      fse.removeSync(outputDir);
    } else {
      throw new Error('目录已存在，请使用--force强制覆盖');
    }
  }
  fse.ensureDirSync(outputDir);
  const spinner = loading('init template ...');
  log.verbose('templateDir', templateDir);
  log.verbose('outputDir', outputDir);
  try {
    fse.copySync(templateDir, outputDir);
    const pkgPath = path.join(outputDir, 'package.json');
    let pkg = await fse.readFile(pkgPath, 'utf-8');
    // 修改 name 值
    pkg = pkg.replace(/"name"\s*:\s*".*?"/, `"name": "${name}"`);
    log.verbose('pkg', pkg);
    // 将更新后的 JSON 数据写回文件
    await fse.writeFile(pkgPath, pkg, 'utf-8');
  } catch (error) {
    spinner.fail('init template fail');
    throw error;
  }
  spinner.succeed('init template success');
};
