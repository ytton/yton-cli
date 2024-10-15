#!/usr/bin/env node

import { filename } from 'dirname-filename-esm';
import importLocal from 'import-local';
import initCLI from '../lib/index.js';

const __filename = filename(import.meta);
if (importLocal(__filename)) {
} else {
  initCLI();
}
