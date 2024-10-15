import inquirer from 'inquirer';

const make = opt => {
  return inquirer
    .prompt([
      {
        ...opt,
        name: 'name'
      }
    ])
    .then(answers => {
      return answers.name;
    });
};

export const makeInput = opt => {
  return make({
    type: 'input',
    message: '请输入内容',
    validate: input => {
      if (input.length) {
        return true;
      }
      return opt.emptyMessage || '请输入内容';
    },
    ...opt,
  });
};

export const makeList = opt => {
  return make({
    type: 'list',
    ...opt,
  });
};
