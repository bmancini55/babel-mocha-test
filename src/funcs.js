
exports.hello = async function fail(name) {
  return 'Hello ' + name;
}

exports.boom = async function fail() {
  throw new Error('boom');
}