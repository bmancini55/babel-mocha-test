require("babel-polyfill");

import Promise from 'bluebird';

exports.hello = async function fail(name) {
  return 'Hello ' + name;
}

exports.boom = async function fail() {
  throw new Error('boom');
}

exports.doAwait = async function () {
  await Promise.delay(1e3);
}

/*
Not working:
exports.doAwaitArrowFunction = async () => {
  await Promise.delay(1e3);
}

*/
