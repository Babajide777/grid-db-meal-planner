const { mealPlanValidation } = require("../utils/validation");

const addMeal = async (req, res) => {
  //validate req.body

  const { details } = await mealPlanValidation(req.body);
  if (details) {
    let allErrors = details.map((detail) => detail.message.replace(/"/g, ""));
    return responseHandler(res, allErrors, 400, false, "");
  }
};

const mealDetails = async (req, res) => {};

const editMeal = async (req, res) => {};

const deleteMeal = async (req, res) => {};

const getAllMeals = async (req, res) => {};

module.exports = {
  addMeal,
  mealDetails,
  editMeal,
  deleteMeal,
  getAllMeals,
};
