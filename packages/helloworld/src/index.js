const registryCommand = program => {
  program
    .command('helloworld')
    .description('Print Hello World')
    .action(() => {
      console.log('Hello World');
    });
};

export default registryCommand;
