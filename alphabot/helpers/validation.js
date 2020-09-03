const Joi = require('joi');

const signupValidation = (body) => {
  const schema = Joi.object({
    email: Joi.string().min(8).required().email(),
    password: Joi.string().min(8).required()
  });

  return schema.validate(body);
}

module.exports.signupValidation = signupValidation;
