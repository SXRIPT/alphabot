const isFinite = (value) => Number.isFinite(Number(value));

const isNumber = (value) => !Number.isNaN(Number(value));


module.exports = {
  isFinite,
  isNumber,
};
