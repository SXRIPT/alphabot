const isObject = string => {
  try {
    const object = JSON.parse(string);
    return (typeof object === 'object');
  } catch {
    return false;
  }
};

module.exports = isObject;
