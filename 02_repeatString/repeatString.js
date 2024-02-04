const repeatString = function (str, times) {
  if (times < 0) return "ERROR";
  let newStr = "";
  for (let i = 0; i < times; i++) {
    newStr += str;
  }
  return newStr;
};

module.exports = repeatString;
