const isObject = (str) => {
  try {
    const obj = JSON.parse(str);
    return (typeof obj === 'object');
  } catch (e) {
    return false;
  }
}

module.exports = isObject;
