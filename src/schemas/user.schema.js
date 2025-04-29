const Joi = require("joi");
const schema = Joi.object({
  userName: Joi.string().required().min(8).max(12).messages({
    "any.required": "username es obligatorio",
    "string.min": "username debe tener como mínimo {#limit} caracteres",
    "string.max": "username debe tener como maximo {#limit} caractes",
  }),
  email: Joi.string().required().email(),
  fechaNacimiento: Joi.string().required().min(10).max(10).messages({
    "any.required": "fechaNacimiento es obligatorio",
    "string.min": "fechaNacimiento debe tener como mínimo {#limit} caracteres",
    "string.max": "fechaNacimiento debe tener como maximo {#limit} caractes",
  }),
});

module.exports = schema;
