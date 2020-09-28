const isFinite = (value) => {
  return Number.isFinite(Number(value));
};

const isNumber = (value) => {
  return !Number.isNaN(Number(value));
};

module.exports = {
  isFinite,
  isNumber,
};
