import ora from 'ora';

export function loading(message = 'Loading...') {
  const spinner = ora(message);
  spinner.start();
  return spinner;
}
