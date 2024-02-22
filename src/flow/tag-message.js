// @flow

import type { LogTag } from './log-tag';

module.exports = tagMessage;

function tagMessage(prefix: LogTag, message: string): string {
  // const i: number = message + 1; // you can uncomment this line to make "flow:check" fail
  return `${prefix} ${message}`;
}
