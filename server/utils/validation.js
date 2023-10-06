const Joi = require("joi");

//meal plan validation rules
const mealPlanValidation = async (field) => {
  const schema = Joi.object({
    title: Joi.string().alphanum().required(),
    calories: Joi.number().integer().required(),
    fat: Joi.number().integer().required(),
    cabs: Joi.number().integer().required(),
    protein: Joi.number().integer().required(),
    days: Joi.array()
      .items(
        Joi.string().valid(
          "sunday",
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
          "saturday"
        )
      )
      .max(7)
      .min(1)
      .required(),
    breakfast: Joi.string().alphanum().required(),
    lunch: Joi.string().alphanum().required(),
    dinner: Joi.string().alphanum().required(),
    snack1: Joi.string().alphanum().required(),
    snack2: Joi.string().alphanum().required(),
    snack3: Joi.string().alphanum().required(),
  });
  try {
    return await schema.validateAsync(field, { abortEarly: false });
  } catch (err) {
    return err;
  }
};

module.exports = {
  mealPlanValidation,
};
