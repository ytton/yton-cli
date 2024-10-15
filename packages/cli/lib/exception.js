import { isDebug, log } from '@yton/utils';

const logError = (prefix, err) => {
  if (isDebug()) {
    log.error(prefix, err);
  } else {
    log.error(prefix, err.message);
  }
};

process.on('uncaughtException', err => {
  logError('error', err);
});

process.on('unhandledRejection', e => {
  logError('error', e);
});
