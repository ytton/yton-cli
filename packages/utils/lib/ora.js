import ora from 'ora';

export function loading(message = 'Loading...') {
  const spinner = ora({
    text: message,
  });
  spinner.start();
  return spinner;
}