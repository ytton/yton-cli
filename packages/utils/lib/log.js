import { isDebug } from './isDebug.js';

import signale from 'signale';

// 模拟日志级别过滤
const logger = new signale.Signale({
  types: {
    success: {
      badge: '🎉',    // 成功日志的图标
      color: 'green', // 成功日志的颜色
      label: 'SUCCESS',  // 成功日志的标签
      logLevel: 'info',
    },
    info: {
      badge: '💡',   // 信息日志的图标
      color: 'blue', // 信息日志的颜色
      label: 'INFO',  // 信息日志的标签
      logLevel: 'info',
    },
    warn: {
      badge: '🚨',   // 警告日志的图标
      color: 'yellow', // 警告日志的颜色
      label: 'WARNING',  // 警告日志的标签
      logLevel: 'warn',
    },
    error: {
      badge: '💥',    // 错误日志的图标
      color: 'red',  // 错误日志的颜色
      label: 'ERROR',  // 错误日志的标签
      logLevel: 'error',
    },
    debug: {
      badge: '🛠️',    // 调试日志的图标
      color: 'magenta', // 调试日志的颜色
      label: 'DEBUG',  // 调试日志的标签
      logLevel: 'debug',
    },
    waiting: {
      badge: '⏳',    // 等待日志的图标
      color: 'cyan',  // 等待日志的颜色
      label: 'WAITING',  // 等待日志的标签
      logLevel: 'info',
    },
  },
});

// 当前日志级别
let logLevel = 'info'; // 可选：'debug', 'info', 'warn', 'error'

// 定义日志级别顺序
const levels = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3
};

logLevel = isDebug() ? 'debug' : 'info';

const log = new Proxy(logger, {
  get(target, prop) {
    if (levels[prop] >= levels[logLevel]) {
      return target[prop];
    }
    return (...args) => {
      // do nothing
    };
  }
});

export { log };
