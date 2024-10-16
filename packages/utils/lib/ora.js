import ora from 'ora';

export function loading(message = 'Loading...') {
  const spinner = ora({
    text:message,
    isEnabled: true,
  });
  spinner.start();
  return spinner;
}
