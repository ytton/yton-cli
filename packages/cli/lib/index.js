import registryHelloworldCommand from '@yton/helloworld';
import './exception.js'; //注册异常处理
import createCli from './createCli.js';
import registryInitCommand from '@yton/init/index.js';

const initCLI = () => {
  const cli = createCli();
  //注册命令
  registryInitCommand(cli);
  registryHelloworldCommand(cli);
  //解析命令
  cli.parse(process.argv);
};

export default initCLI;
