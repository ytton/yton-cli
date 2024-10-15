import path from 'node:path';
import { execa } from 'execa';

const CLI = path.join(__dirname, '../bin/index.js');
const bin =
  () =>
  (...args) =>
    execa(CLI, args);

test('run helloworld command output Hello World', async () => {
  const { stdout } = await bin()('helloworld');
  expect(stdout).toContain('Hello World');
});

// 测试运行错误的命令
test('run error command', async () => {
  const { stderr } = await bin()('iii');
  expect(stderr).toContain('unknown command: iii');
});

test('should not throw Error when run help command', async () => {
  const { stderr } = await bin()('-h');
  expect(stderr).not.toContain('Err');
});

test('show correct version', async () => {
  const { stdout } = await bin()('-V');
  expect(stdout).toContain(require('../package.json').version);
});

test('open debug mode', async () => {
  let err;
  try {
    await bin()('--debug');
  } catch (error) {
    err = error;
  }
  expect(err.message).toContain('debug mode enabled');
});
