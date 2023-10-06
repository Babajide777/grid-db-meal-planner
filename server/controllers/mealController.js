const { mealPlanValidation } = require("../utils/validation");

const addMeal = async (req, res) => {
  //validate req.body

  const { details } = await mealPlanValidation(req.body);
  if (details) {
    let allErrors = details.map((detail) => detail.message.replace(/"/g, ""));
    return responseHandler(res, allErrors, 400, false, "");
  }
};

module.exports = {
  addMeal,
};
