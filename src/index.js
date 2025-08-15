module.exports = function reverse(n) {
  const str = Math.abs(n).toString();
  return parseInt(str.split('').reverse().join(''), 10);
};
