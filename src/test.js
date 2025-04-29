const Joi = require("joi");

const schema = Joi.object({
  username: Joi.string().required().min(8).max(12).messages({
    "any.required": "username es obligatorio",
    "string.min": "username debe tener como mínimo {#limit} caracteres",
    "string.max": "username debe tener como máximo {#limit} caracteres",
    "string.empty": "username no puede ser vacio",
  }),
  plataforma: Joi.string().required().valid("netflix", "start+").messages({
    "any.required": "plataforma es obligatorio",
    "any.only": "El valor recibido no es un platafoma valida",
  }),
  edad: Joi.number().required(),
});

const { error, value } = schema.validate(
  { username: "Gonzager", plataforma: "disney" },
  { abortEarly: false }
);

if (error) {
  const errores = error.details.map((d) => {
    return { atributo: d.path[0], error: d.message, type: d.type };
  });
  console.log(errores);
}
