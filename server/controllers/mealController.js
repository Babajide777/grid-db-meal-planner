const { mealPlanValidation } = require("../utils/validation");
const { initGridDbTS, insert } = require("../config/db");
const { responseHandler } = require("../utils/responseHandler");
const { v4: uuidv4 } = require("uuid");

const addMeal = async (req, res) => {
  const { collectionDb, store, conInfo } = await initGridDbTS();
  //validate req.body

  const { details } = await mealPlanValidation(req.body);
  if (details) {
    let allErrors = details.map((detail) => detail.message.replace(/"/g, ""));
    return responseHandler(res, allErrors, 400, false, "");
  }  
	


  try {
    const {
      title,
      calories,
      fat,
      cabs,
      protein,
      days,
      breakfast,
      lunch,
      dinner,
      snack1,
      snack2,
      snack3,
    } = req.body;

    const data = [
      uuidv4(),
      title,
      calories,
      fat,
      cabs,
      protein,
      "jide",
      breakfast,
      lunch,
      dinner,
      snack1,
      snack2,
      snack3,
    ];

    const saveStatus = await insert(data, collectionDb);

	 console.log(saveStatus)

	  console.log(saveStatus.error, "error")

	  		
    return saveStatus.status
      ? responseHandler(res, "Meal plan saved successfully", 201, true, "")
      : responseHandler(
          res,
          "Unable to save meal plan",
          400,
          false,
          saveStatus.error
        );
  } catch (error) {
    responseHandler(res, "Error saving meal plan", 400, false, error);
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
