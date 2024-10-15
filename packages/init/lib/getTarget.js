import { makeInput, makeList } from '@yton/utils';
import path from 'node:path';

const PROJ_TEMPLATES = [
  {
    name: 'react vite ts template',
    value: 'react-vite-ts',
    pkgName: '@yton/react-vite-ts'
  }
];

const TEMPLATE_MAP = {
  project: PROJ_TEMPLATES,
  page: []
};

export const getTarget = async (target) => {
  target.name ??= await makeInput({ message: '请输入名称', emptyMessage: '名称不能为空' });
  target.type ??= await makeList({
    message: '请选择创建类型',
    default: 'project',
    choices: [
      { name: '项目', value: 'project' },
      { name: '页面', value: 'page' }
    ]
  });

  target.template ??= await makeList({
    message: '请选择模板',
    default: 'vite-react-ts',
    choices: TEMPLATE_MAP[target.type]
  });

  target.templateInfo = TEMPLATE_MAP[target.type].find(item => item.value === target.template);

  target.outputDir = path.join(process.cwd(), target.name)

  return target;
};
